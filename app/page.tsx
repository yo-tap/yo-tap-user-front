'use client'
import { OAddPointBaloon } from '@/components/02_organisms/OAddPointBaloon'
import { OCounter } from '@/components/02_organisms/OCounter'
import { CardSwiper } from '@/components/CardSwiper'
import { ReviewableContent } from '@/types/ReviewableContent'
import { Box, Flex, Progress } from '@mantine/core'
import Image from 'next/image'
import { useState } from 'react'

// app/page.tsx
const Page = () => {
  const [baloons, setBaloons] = useState<{ id: number; point: number }[]>([])
  const [point, setPoint] = useState(0)
  const [reviewedAmount, setReviewedAmount] = useState(0)
  const [counter, setCounter] = useState(0)

  const swiped = (_review: boolean) => {
    console.log('swiped', _review)
    setReviewedAmount(reviewedAmount + 1)
    setPoint(point + 19)

    setCounter(counter + 1)
    // 新しいバルーンを追加（ポイントを追加）
    setBaloons((prev) => [
      ...prev,
      { id: counter, point: 10 + counter * 5 }, // IDとポイントを設定
    ])

    // 一定時間後にバルーンを削除する
    setTimeout(() => {
      setBaloons((prev) => prev.filter((baloon) => baloon.id !== counter))
    }, 3 * 1000)
  }

  return (
    <div>
      <Flex h={56} px={24} justify="space-between">
        <Flex align="center">
          <Image
            src="/assets/images/logo/logo_yotap_red.svg"
            width={80}
            height={16}
            alt="Yotap logo"
          />
        </Flex>
        <Flex align="center">
          <Image
            src="/assets/images/ticker/ticker_yo.png"
            width={20}
            height={20}
            alt="Yotap ticker"
          />

          <Flex pl={8} pt={3}>
            <OCounter
              rollSpeed={2}
              initialRollAnimation={false}
              fz={16}
              num={point}
            />
          </Flex>
        </Flex>
      </Flex>

      <Flex h={3} align="top" justify="left">
        {Array.from({ length: reviewableContents.length }, (_, i) => (
          <Progress
            key={i}
            w={`${100 / reviewableContents.length}%`}
            h={2}
            mx={1}
            value={reviewedAmount > i ? 100 : 0}
            color="red"
          />
        ))}
      </Flex>

      <Box display="block" pos="relative">
        <Box style={{ zIndex: 10 }}>
          <CardSwiper
            reviewableContents={reviewableContents}
            onSwiped={swiped}
          />
        </Box>
        {baloons.map((baloon) => (
          <Box
            key={baloon.id}
            pos="absolute"
            top={100}
            left={'50%'}
            style={{ zIndex: 100 }}
          >
            <OAddPointBaloon
              addableTotalPoint={10}
              trigger={true}
              counter={counter}
              isBoosting={true}
            />
          </Box>
        ))}
      </Box>
    </div>
  )
}

export default Page

const reviewableContents: ReviewableContent[] = [
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_beeton_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_cakon_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_cat_gold_miner_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_catizen_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_dog_mutant_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_fanton_fantasy_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_gatto_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_hamsterdam_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_holdcoin_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_moewbie_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_beeton_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_cakon_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_cat_gold_miner_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_catizen_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_dog_mutant_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_fanton_fantasy_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_gatto_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_hamsterdam_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_holdcoin_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_moewbie_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_beeton_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_cakon_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_cat_gold_miner_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_catizen_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_dog_mutant_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_fanton_fantasy_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_gatto_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_hamsterdam_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_holdcoin_image_1.png',
  },
  {
    imageUrl:
      '/assets/images/_sample/picture/_sample_picture_moewbie_image_1.png',
  },
]
