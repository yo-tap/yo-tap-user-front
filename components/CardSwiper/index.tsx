'use client'
import { AnswerLabel, SurveyQuestionEntity } from '@/types/SurveyQuestion.js'
import { getFontClass } from '@/utils/fonts'
import { Box, Flex, Text } from '@mantine/core'
import Image from 'next/image.js'
import { FC, ReactNode } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import EffectTinder from './effect-tinder.esm.js'

type Props = {
  surveyQuestions: SurveyQuestionEntity[]
  answeredComponent: ReactNode
  onSwiped: (swiper: any) => void
}

const Component: FC<Props> = ({
  surveyQuestions,
  answeredComponent,
  onSwiped,
}) => {
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
          {surveyQuestions.map((sq, index) => {
            return (
              <SwiperSlide key={index} style={swiperStyle}>
                <SwiperSlideWrapper sq={sq} />
              </SwiperSlide>
            )
          })}
          <SwiperSlide style={swiperStyle}>
            <AnsweredComponent>{answeredComponent}</AnsweredComponent>
          </SwiperSlide>
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
  sq: SurveyQuestionEntity
}

const SwiperSlideWrapper: FC<SwiperSlideWrapperProps> = ({ sq }) => {
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
          <Box
            pos="absolute"
            style={{ backgroundColor: sq.bgColor, zIndex: 9 }}
            w="100%"
            h="100%"
            top={0}
            left={0}
          />
          <Box style={{ zIndex: 8 }}>
            <Image
              src={sq.bgImageUrl || ''}
              alt=""
              fill
              priority
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Flex
            pos="relative"
            w="100%"
            h={280}
            p={36}
            style={{ zIndex: 10 }}
            align={sq.align || 'center'}
            justify={sq.justify || 'center'}
            ta={sq.ta || 'center'}
          >
            <Text
              fz={sq.fz || 28}
              fw={sq.fw || 900}
              lts={sq.lts || 1}
              lh={sq.lh || 1.5}
              c={sq.c || 'white'}
              className={sq.ff ? getFontClass(sq.ff) : undefined}
              style={{ zIndex: 10 }}
            >
              {sq.title}
            </Text>
          </Flex>
          {sq.layout === '1col' && (
            <Flex
              pos="absolute"
              w="100%"
              left={0}
              bottom={0}
              py={36}
              px={36}
              style={{ zIndex: 10 }}
              align={'center'}
              justify={'space-between'}
              ta={sq.ta || 'center'}
            >
              <AnswerLabelComponent answerLabel={sq.answerLeft} />
              <AnswerLabelComponent answerLabel={sq.answerRight} />
            </Flex>
          )}
          {sq.layout === '2col' && (
            <Flex
              pos="absolute"
              direction="column"
              w="100%"
              left={0}
              bottom={0}
              py={36}
              px={36}
              style={{ zIndex: 10 }}
              align={'center'}
              justify={'space-between'}
              ta={sq.ta || 'center'}
            >
              <AnswerLabelComponent answerLabel={sq.answerLeft} />
              <AnswerLabelComponent answerLabel={sq.answerRight} />
            </Flex>
          )}
        </Box>
      </Box>
    </Flex>
  )
}

type AnswerLabelComponentProps = {
  answerLabel: AnswerLabel
  gap?: number
}

const AnswerLabelComponent: FC<AnswerLabelComponentProps> = ({
  answerLabel,
  gap = 12,
}) => {
  return (
    <>
      <Flex
        w={'100%'}
        align={answerLabel.align || 'start'}
        justify={answerLabel.justify || 'start'}
        bg={answerLabel.bgColor || 'white'}
        mt={gap}
        px={24}
        py={12}
        style={{ borderRadius: answerLabel.borderRadius || 24 }}
      >
        <Text
          c={answerLabel.c || 'black'}
          ff={answerLabel.ff ? getFontClass(answerLabel.ff) : undefined}
          fw={answerLabel.fw || 900}
          fz={answerLabel.fz || 28}
        >
          {answerLabel.label}
        </Text>
      </Flex>
    </>
  )
}

type AnsweredProps = {
  children: ReactNode
}

const AnsweredComponent: FC<AnsweredProps> = ({ children }) => {
  return (
    <>
      <Flex w={458} h={620} pos="relative" justify="center">
        <Box
          w={358}
          // h={500}
          style={{
            backgroundColor: 'white',
            // boxShadow: '0px 10px 44px rgba(0,0,0,0.06)!important',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          <Box pos="relative" display="block" w={358} h={500}>
            {children}
          </Box>
        </Box>
      </Flex>
    </>
  )
}
