import { auth } from '@/lib/firebase'
import { AnsweredContent } from '@/types/Answer'
import { SurveyEntity } from '@/types/Survey'
import { signInAnonymously } from 'firebase/auth'
import { useCallback, useEffect, useRef, useState } from 'react'

export const useAnswerServeyScreen = (surveyEntity: SurveyEntity) => {
  const [baloons, setBaloons] = useState<
    {
      id: number
      point: number
      x: number
      y: number
      review: boolean
      message: string
      bgColor: string
    }[]
  >([])
  const [point, setPoint] = useState(0)
  const [reviewedAmount, setReviewedAmount] = useState(0)
  const [answeredContents, setAnsweredContents] = useState<AnsweredContent[]>(
    []
  )

  const [counter, setCounter] = useState(0)

  const likedSoundRef = useRef<HTMLAudioElement | null>(null)
  const noopsSoundRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    ;(async () => {
      // setup sound
      // likedSoundRef.current = new Audio('/assets/sounds/liked.mp3')
      // noopsSoundRef.current = new Audio('/assets/sounds/noops2.wav')

      // sign in anonymously
      const userCredential = await signInAnonymously(auth)
      const jwt = await userCredential.user.getIdToken()
      const response = await fetch('/api/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`, // JWT を Authorization ヘッダーにセット
        },
      })
      console.log('response-------------', response)
    })()
  }, [])

  const swiped = useCallback(
    (swiper: any) => {
      const review: boolean =
        swiper.touches.startX - swiper.touches.currentX < 0
      if (review) {
        likedSoundRef.current?.play()
        setPoint(point + surveyEntity.contents[counter].answerLeft.point)
        setBaloons((prev) => [
          ...prev,
          {
            id: counter,
            point: surveyEntity.contents[counter].answerRight.point,
            x: swiper.touches.startX,
            y: swiper.touches.startY - 120,
            review,
            message: String(
              surveyEntity.contents[counter].answerRight.label || ''
            ),
            bgColor:
              surveyEntity.contents[counter].answerLeft.pointUpEffectBgColor ||
              'red',
          },
        ])

        const newAnsweredContent: AnsweredContent = {
          uniqueKey: surveyEntity.contents[counter].uniqueKey,
          serveyTitle: surveyEntity.contents[counter].title,
          answer: 'right',
          answeredLabelString: `${surveyEntity.contents[counter].answerRight.label}`,
          point: surveyEntity.contents[counter].answerRight.point,
          answeredAt: new Date(),
        }
        setAnsweredContents([...answeredContents, newAnsweredContent])
      } else {
        noopsSoundRef.current?.play()
        setPoint(point + surveyEntity.contents[counter].answerLeft.point)
        setBaloons((prev) => [
          ...prev,
          {
            id: counter,
            point: surveyEntity.contents[counter].answerLeft.point,
            x: swiper.touches.startX,
            y: swiper.touches.startY - 120,
            review,
            message: String(
              surveyEntity.contents[counter].answerLeft.label || ''
            ),
            bgColor:
              surveyEntity.contents[counter].answerLeft.pointUpEffectBgColor ||
              'blue',
          },
        ])

        const newAnsweredContent: AnsweredContent = {
          uniqueKey: surveyEntity.contents[counter].uniqueKey,
          serveyTitle: surveyEntity.contents[counter].title,
          answer: 'left',
          answeredLabelString: `${surveyEntity.contents[counter].answerLeft.label}`,
          point: surveyEntity.contents[counter].answerLeft.point,
          answeredAt: new Date(),
        }
        setAnsweredContents([...answeredContents, newAnsweredContent])
      }

      setReviewedAmount(reviewedAmount + 1)
      setCounter(counter + 1)

      // 一定時間後にバルーンを削除する
      setTimeout(() => {
        setBaloons((prev) => prev.filter((baloon) => baloon.id !== counter))
      }, 1 * 1000)
    },
    [counter, point, surveyEntity.contents, reviewedAmount, answeredContents]
  )

  return { baloons, point, reviewedAmount, counter, swiped, answeredContents }
}
