'use client'
import { ERippleEffect } from '@/components/01_elements/ERippleEffect'
import { OAddPointBaloon } from '@/components/02_organisms/OAddPointBaloon'
import { OContinuousProgress } from '@/components/02_organisms/OContinuousProgress'
import { ONavBar } from '@/components/02_organisms/ONavBar'
import { CardSwiper } from '@/components/CardSwiper'
import { Box } from '@mantine/core'
import { FC, memo } from 'react'
import { useAnswerServeyScreen } from './hooks'

const Component: FC = () => {
  const { baloons, point, counter, swiped, reviewableContents } =
    useAnswerServeyScreen()

  return (
    <div>
      <ONavBar point={point} />
      <OContinuousProgress
        contentsLength={reviewableContents.length}
        currentContentIndex={counter}
      />
      <CardSwiper reviewableContents={reviewableContents} onSwiped={swiped} />

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
