import { auth } from '@/lib/firebase'
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
  const [counter, setCounter] = useState(0)

  const likedSoundRef = useRef<HTMLAudioElement | null>(null)
  const noopsSoundRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    ;(async () => {
      // setup sound
      likedSoundRef.current = new Audio('/assets/sounds/liked.mp3')
      noopsSoundRef.current = new Audio('/assets/sounds/noops2.wav')

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
      }

      setReviewedAmount(reviewedAmount + 1)
      setCounter(counter + 1)

      // 一定時間後にバルーンを削除する
      setTimeout(() => {
        setBaloons((prev) => prev.filter((baloon) => baloon.id !== counter))
      }, 1 * 1000)
    },
    [counter, point, surveyEntity.contents, reviewedAmount]
  )

  return { baloons, point, reviewedAmount, counter, swiped }
}
