'use client'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import EffectTinder from './effect-tinder.esm.js'
import Image from 'next/image.js'
import { Box, Flex } from '@mantine/core'
import { FC } from 'react'

const Component = () => {
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
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide style={swiperStyle}>
            <SwiperSlideWrapper />
          </SwiperSlide>
          <SwiperSlide style={swiperStyle}>
            <SwiperSlideWrapper />
          </SwiperSlide>
          <SwiperSlide style={swiperStyle}>
            <SwiperSlideWrapper />
          </SwiperSlide>
          <SwiperSlide style={swiperStyle}>
            <SwiperSlideWrapper />
          </SwiperSlide>
          <SwiperSlide style={swiperStyle}>
            <SwiperSlideWrapper />
          </SwiperSlide>
          <SwiperSlide style={swiperStyle}>
            <SwiperSlideWrapper />
          </SwiperSlide>
          <SwiperSlide style={swiperStyle}>
            <SwiperSlideWrapper />
          </SwiperSlide>
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
          </button>
        </Flex>
      </div>
    </>
  )
}

export { Component as CardSwiper }

const SwiperSlideWrapper: FC = () => {
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
        <Box pos="relative" display="block" w={358} h={360}>
          <Image
            src="/assets/images/_sample/_sample_ticker.png"
            alt=""
            fill
            priority
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </Box>
      {/* <img src="/assets/images/_sample/_sample_ticker.png" alt="" /> */}
      <div className="swiper-tinder-label swiper-tinder-label-yes">Like</div>
      <div className="swiper-tinder-label swiper-tinder-label-no">Nope</div>
    </Flex>
  )
}
