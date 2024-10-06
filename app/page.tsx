'use client'
import { ERippleEffect } from '@/components/01_elements/ERippleEffect'
import { OAddPointBaloon } from '@/components/02_organisms/OAddPointBaloon'
import { OContinuousProgress } from '@/components/02_organisms/OContinuousProgress'
import { ONavBar } from '@/components/02_organisms/ONavBar'
import { CardSwiper } from '@/components/CardSwiper'
import { auth } from '@/lib/firebase'
import { ReviewableContent } from '@/types/ReviewableContent'
import { Box } from '@mantine/core'
import { signInAnonymously } from 'firebase/auth'
import { useEffect, useRef, useState } from 'react'

// app/page.tsx
const Page = () => {
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

      const response2 = await fetch('/api/serveys/1', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`, // JWT を Authorization ヘッダーにセット
        },
      })
      console.log('response2-------------', response2)
    })()
  }, [])

  const swiped = (swiper: any) => {
    const review: boolean = swiper.touches.startX - swiper.touches.currentX < 0
    if (review) {
      likedSoundRef.current?.play()
      setPoint(point + reviewableContents[counter].rightPoint)
      setBaloons((prev) => [
        ...prev,
        {
          id: counter,
          point: reviewableContents[counter].rightPoint,
          x: swiper.touches.startX,
          y: swiper.touches.startY - 120,
          review,
          message: reviewableContents[counter].rightString || '',
          bgColor: reviewableContents[counter].rightColor || 'red',
        },
      ])
    } else {
      noopsSoundRef.current?.play()
      setPoint(point + reviewableContents[counter].leftPoint)
      setBaloons((prev) => [
        ...prev,
        {
          id: counter,
          point: reviewableContents[counter].leftPoint,
          x: swiper.touches.startX,
          y: swiper.touches.startY - 120,
          review,
          message: reviewableContents[counter].leftString || '',
          bgColor: reviewableContents[counter].leftColor || 'red',
        },
      ])
    }

    setReviewedAmount(reviewedAmount + 1)
    setCounter(counter + 1)

    // 一定時間後にバルーンを削除する
    setTimeout(() => {
      setBaloons((prev) => prev.filter((baloon) => baloon.id !== counter))
    }, 1 * 1000)
  }

  return (
    <div>
      {/* Header */}
      <ONavBar point={point} />

      {/* Progress */}
      <OContinuousProgress
        contentsLength={reviewableContents.length}
        currentContentIndex={counter}
      />

      {/* CardSwiper */}
      <CardSwiper reviewableContents={reviewableContents} onSwiped={swiped} />

      {/* Baloon */}
      {baloons.map((baloon) => (
        <>
          <Box
            key={baloon.id}
            pos="absolute"
            top={baloon.y}
            left={baloon.x - 50} // リップルエフェクトのサイズ分一旦引く
            style={{ zIndex: 100 }}
          >
            <OAddPointBaloon
              addableTotalPoint={baloon.point}
              liked={baloon.review}
              bgColor={baloon.bgColor}
              message={baloon.message}
            />
            <ERippleEffect x={0} y={0} color={baloon.bgColor} />
          </Box>
        </>
      ))}
    </div>
  )
}

export default Page

const reviewableContents: ReviewableContent[] = [
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-01.png',
    rightString: 'YES',
    rightPoint: 15,
    leftString: 'NO',
    leftPoint: 10,
    leftColor: 'blue',
  },
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-02.png',
    rightString: 'YES',
    rightPoint: 15,
    leftString: 'NO',
    leftPoint: 10,
    leftColor: 'blue',
  },
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-03.png',
    rightString: 'VERY INTERESTED',
    rightPoint: 12,
    leftString: 'NOT INTERESTED',
    leftPoint: 10,
    leftColor: 'blue',
  },
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-04.png',
    rightString: 'INCORRECT!',
    rightPoint: 39,
    leftString: 'CORRECT!',
    leftPoint: 11,
    rightColor: 'blue',
  },
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-05.png',
    rightString: 'YES',
    rightPoint: 12,
    leftString: 'NO',
    leftPoint: 11,
    leftColor: 'blue',
  },
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-06.png',
    rightString: 'YES',
    rightPoint: 10,
    leftString: 'NO',
    leftPoint: 11,
    leftColor: 'blue',
  },
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-01.png',
    rightString: 'YES',
    rightPoint: 10,
    leftString: 'NO',
    leftPoint: 10,
    leftColor: 'blue',
  },
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-02.png',
    rightString: 'YES',
    rightPoint: 10,
    leftString: 'NO',
    leftPoint: 10,
    leftColor: 'blue',
  },
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-03.png',
    rightString: 'YES',
    rightPoint: 10,
    leftString: 'NO',
    leftPoint: 10,
    leftColor: 'blue',
  },
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-04.png',
    rightString: 'YES',
    rightPoint: 10,
    leftString: 'NO',
    leftPoint: 10,
    leftColor: 'blue',
  },
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-05.png',
    rightString: 'YES',
    rightPoint: 10,
    leftString: 'NO',
    leftPoint: 10,
    leftColor: 'blue',
  },
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-06.png',
    rightString: 'YES',
    rightPoint: 10,
    leftString: 'NO',
    leftPoint: 10,
    leftColor: 'blue',
  },
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-01.png',
    rightString: 'YES',
    rightPoint: 15,
    leftString: 'NO',
    leftPoint: 10,
    leftColor: 'blue',
  },
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-02.png',
    rightString: 'YES',
    rightPoint: 15,
    leftString: 'NO',
    leftPoint: 10,
    leftColor: 'blue',
  },
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-03.png',
    rightString: 'VERY INTERESTED',
    rightPoint: 12,
    leftString: 'NOT INTERESTED',
    leftPoint: 10,
    leftColor: 'blue',
  },
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-04.png',
    rightString: 'INCORRECT!',
    rightPoint: 39,
    leftString: 'CORRECT!',
    leftPoint: 11,
    rightColor: 'blue',
  },
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-05.png',
    rightString: 'YES',
    rightPoint: 12,
    leftString: 'NO',
    leftPoint: 11,
    leftColor: 'blue',
  },
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-06.png',
    rightString: 'YES',
    rightPoint: 10,
    leftString: 'NO',
    leftPoint: 11,
    leftColor: 'blue',
  },
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-01.png',
    rightString: 'YES',
    rightPoint: 10,
    leftString: 'NO',
    leftPoint: 10,
    leftColor: 'blue',
  },
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-02.png',
    rightString: 'YES',
    rightPoint: 10,
    leftString: 'NO',
    leftPoint: 10,
    leftColor: 'blue',
  },
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-03.png',
    rightString: 'YES',
    rightPoint: 10,
    leftString: 'NO',
    leftPoint: 10,
    leftColor: 'blue',
  },
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-04.png',
    rightString: 'YES',
    rightPoint: 10,
    leftString: 'NO',
    leftPoint: 10,
    leftColor: 'blue',
  },
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-05.png',
    rightString: 'YES',
    rightPoint: 10,
    leftString: 'NO',
    leftPoint: 10,
    leftColor: 'blue',
  },
  {
    imageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-06.png',
    rightString: 'YES',
    rightPoint: 10,
    leftString: 'NO',
    leftPoint: 10,
    leftColor: 'blue',
  },
]
