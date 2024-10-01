import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import EffectTinder from './effect-tinder.esm.js'
import 'swiper/css'

const Component = () => {
  return (
    <>
      <div className="swiper">
        <Swiper
          modules={[EffectTinder]}
          effect="tinder"
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div>
              <img src="/assets/images/01.jpg" alt="" />
              <div className="swiper-tinder-label swiper-tinder-label-yes">
                Like
              </div>
              <div className="swiper-tinder-label swiper-tinder-label-no">
                Nope
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="/assets/images/02.jpg" alt="" />
              <div className="swiper-tinder-label swiper-tinder-label-yes">
                Like
              </div>
              <div className="swiper-tinder-label swiper-tinder-label-no">
                Nope
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="/assets/images/02.jpg" alt="" />
              <div className="swiper-tinder-label swiper-tinder-label-yes">
                Like
              </div>
              <div className="swiper-tinder-label swiper-tinder-label-no">
                Nope
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <button className="swiper-tinder-button swiper-tinder-button-no">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
          </svg>
        </button>
        <button className="swiper-tinder-button swiper-tinder-button-yes">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path d="m480-121-41-37q-106-97-175-167.5t-110-126Q113-507 96.5-552T80-643q0-90 60.5-150.5T290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.5T880-643q0 46-16.5 91T806-451.5q-41 55.5-110 126T521-158l-41 37Z" />
          </svg>
        </button>
      </div>
    </>
  )
}

export { Component as TinderUI }
