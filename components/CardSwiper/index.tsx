'use client'
import { ReviewableContent } from '@/types/ReviewableContent.js'
import { Box, Flex } from '@mantine/core'
import Image from 'next/image.js'
import { FC } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import EffectTinder from './effect-tinder.esm.js'

type Props = {
  reviewableContents: ReviewableContent[]
  onSwiped: (swiper: any) => void
}

const Component: FC<Props> = ({ reviewableContents, onSwiped }) => {
  const swiperStyle = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
    cursor: 'pointer',
  }

  return (
    <>
      <div className="swiper">
        <Swiper
          modules={[EffectTinder]}
          effect="tinder"
          onSlideChange={(swiper) => {
            onSwiped(swiper)
          }}
        >
          {reviewableContents.map((content, index) => {
            return (
              <SwiperSlide key={index} style={swiperStyle}>
                <SwiperSlideWrapper imageUri={content.imageUrl} />
              </SwiperSlide>
            )
          })}
        </Swiper>
        <Flex>
          <button className="swiper-tinder-button swiper-tinder-button-no">
            <Box className="material-icons-outlined">close</Box>
          </button>
          <button className="swiper-tinder-button swiper-tinder-button-yes">
            <Box className="material-icons-outlined">favorite</Box>
          </button>
        </Flex>
      </div>
    </>
  )
}

export { Component as CardSwiper }

type SwiperSlideWrapperProps = {
  imageUri: string
}

const SwiperSlideWrapper: FC<SwiperSlideWrapperProps> = ({ imageUri }) => {
  return (
    <Flex w={458} h={620} pos="relative" justify="center">
      <Box
        w={358}
        h={500}
        style={{
          backgroundColor: 'white',
          boxShadow: '0px 10px 44px rgba(0,0,0,0.06)!important',
          borderRadius: '16px',
          overflow: 'hidden',
        }}
      >
        <Box pos="relative" display="block" w={358} h={500}>
          <Image
            src={imageUri}
            alt=""
            fill
            priority
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </Box>
    </Flex>
  )
}
