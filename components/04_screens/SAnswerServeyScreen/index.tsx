'use client'
import { ERippleEffect } from '@/components/01_elements/ERippleEffect'
import { OAddPointBaloon } from '@/components/02_organisms/OAddPointBaloon'
import { OAnswerComplete } from '@/components/02_organisms/OAnswerComplete'
import { OContinuousProgress } from '@/components/02_organisms/OContinuousProgress'
import { ONavBar } from '@/components/02_organisms/ONavBar'
import { CardSwiper } from '@/components/CardSwiper'
import { SurveyEntity } from '@/types/Survey'
import { Box } from '@mantine/core'
import { FC, memo } from 'react'
import { useAnswerSurveyScreen } from './hooks'

type Props = {
  surveyEntity: SurveyEntity
}

const Component: FC<Props> = ({ surveyEntity }) => {
  const { baloons, point, counter, swiped, isAnswered } =
    useAnswerSurveyScreen(surveyEntity)

  return (
    <div>
      <ONavBar point={point} />
      <OContinuousProgress
        contentsLength={surveyEntity.contents.length}
        currentContentIndex={counter}
      />
      {isAnswered ? (
        <OAnswerComplete point={point} />
      ) : (
        <CardSwiper surveyQuestions={surveyEntity.contents} onSwiped={swiped} />
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

export { Component as SAnswerSurveyScreen }

const MemoizedAddPointBaloon = memo(OAddPointBaloon)
MemoizedAddPointBaloon.displayName = 'MemoizedAddPointBaloon'

const MemoizedRippleEffect = memo(ERippleEffect)
MemoizedRippleEffect.displayName = 'MemoizedRippleEffect'
