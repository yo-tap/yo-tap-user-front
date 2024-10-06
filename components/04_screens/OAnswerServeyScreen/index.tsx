'use client'
import { ERippleEffect } from '@/components/01_elements/ERippleEffect'
import { OAddPointBaloon } from '@/components/02_organisms/OAddPointBaloon'
import { OContinuousProgress } from '@/components/02_organisms/OContinuousProgress'
import { ONavBar } from '@/components/02_organisms/ONavBar'
import { CardSwiper } from '@/components/CardSwiper'
import { Box, Flex, Text } from '@mantine/core'
import { FC, memo } from 'react'
import { useAnswerServeyScreen } from './hooks'
import { SurveyEntity } from '@/types/Survey'
import { surveyEntityMock } from '@/mocks/surveyEntity.mock'
import { OCounter } from '@/components/02_organisms/OCounter'
import Image from 'next/image'
import { fontInterItalic, fontShrikhand } from '@/utils/fonts'
import { OActionButton } from '@/components/02_organisms/OActionButton'
import { OAnswerComplete } from '@/components/02_organisms/OAnswerComplete'

type Props = {
  surveyEntity: SurveyEntity
}

const Component: FC<Props> = ({ surveyEntity }) => {
  const { baloons, point, counter, swiped, answeredContents } =
    useAnswerServeyScreen(surveyEntityMock)

  console.log('answeredContents-------------', answeredContents)

  return (
    <div>
      <ONavBar point={point} />
      <OContinuousProgress
        contentsLength={surveyEntityMock.contents.length}
        currentContentIndex={counter}
      />
      {answeredContents.length === surveyEntityMock.contents.length ? (
        <OAnswerComplete point={point} />
      ) : (
        <CardSwiper
          surveyQuestions={surveyEntityMock.contents}
          onSwiped={swiped}
          answeredComponent={<></>}
        />
      )}

      {baloons.map((baloon) => (
        <Box
          key={baloon.id}
          pos="absolute"
          top={baloon.y}
          left={baloon.x - 50}
          style={{ zIndex: 100 }}
        >
          <MemoizedAddPointBaloon
            addableTotalPoint={baloon.point}
            liked={baloon.review}
            bgColor={baloon.bgColor}
            message={baloon.message}
          />
          <MemoizedRippleEffect x={0} y={0} color={baloon.bgColor} />
        </Box>
      ))}
    </div>
  )
}

export { Component as OAnswerServeyScreen }

const MemoizedAddPointBaloon = memo(OAddPointBaloon)
MemoizedAddPointBaloon.displayName = 'MemoizedAddPointBaloon'

const MemoizedRippleEffect = memo(ERippleEffect)
MemoizedRippleEffect.displayName = 'MemoizedRippleEffect'
