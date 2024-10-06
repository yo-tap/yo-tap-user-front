import { Flex, Progress } from '@mantine/core'
import { FC, memo } from 'react'

type Props = {
  contentsLength: number
  currentContentIndex: number
}

const Component: FC<Props> = ({ contentsLength, currentContentIndex }) => {
  return (
    <>
      <Flex h={3} align="top" justify="left">
        {Array.from({ length: contentsLength }, (_, i) => (
          <MemoizedProgress
            key={i}
            width={`${100 / contentsLength}%`}
            height={2}
            value={currentContentIndex > i ? 100 : 0}
            color="red"
          />
        ))}
      </Flex>
    </>
  )
}

export { Component as OContinuousProgress }

type MemoizedProgressProps = {
  width: string
  height: number
  value: number
  color: string
}

const MemoizedProgress: FC<MemoizedProgressProps> = memo(
  ({ width, height, value, color }) => (
    <Progress w={width} h={height} mx={1} value={value} color={color} />
  )
)

MemoizedProgress.displayName = 'MemoizedProgress'
