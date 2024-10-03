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
            // onSwiped(true)
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
          <button
            className="swiper-tinder-button swiper-tinder-button-no"
            // style={{ marginLeft: 16 }} wideSizeの場合
          >
            <Box className="material-icons-outlined">close</Box>
          </button>
          <button className="swiper-tinder-button swiper-tinder-button-yes">
            <Box className="material-icons-outlined">favorite</Box>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="48"
            >
              <path d="m480-121-41-37q-106-97-175-167.5t-110-126Q113-507 96.5-552T80-643q0-90 60.5-150.5T290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.5T880-643q0 46-16.5 91T806-451.5q-41 55.5-110 126T521-158l-41 37Z" />
            </svg> */}
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
    <Flex w={458} h={740} pos="relative" justify="center">
      <Box
        w={358}
        h={600}
        style={{
          backgroundColor: 'white',
          boxShadow: '0px 10px 44px rgba(0,0,0,0.06)!important',
          borderRadius: '16px',
          overflow: 'hidden',
        }}
      >
        <Box pos="relative" display="block" w={358} h={600}>
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
      {/* <img src="/assets/images/_sample/_sample_ticker.png" alt="" /> */}
      {/* <div className="swiper-tinder-label swiper-tinder-label-yes">Like</div>
      <div className="swiper-tinder-label swiper-tinder-label-no">Nope</div> */}
    </Flex>
  )
}
