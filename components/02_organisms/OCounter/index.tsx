'use client'
import { fontShrikhand } from '@/utils/fonts'
import { Box } from '@mantine/core'
import { FC, useRef } from 'react'
import { ECounterUnit } from '../../01_elements/ECounterUnit'

type Props = {
  fz?: number
  rollSpeed?: number
  initialRollAnimation?: boolean
  num: number
}

const Component: FC<Props> = ({
  fz = 20,
  rollSpeed = 0,
  initialRollAnimation = false,
  num,
}) => {
  const digitsArray = num.toLocaleString().split('')
  const recentTotalPointDigitArray = digitsArray

  return (
    <>
      {recentTotalPointDigitArray.map((digit, index) => {
        if (digit === ',')
          return (
            <Box
              className={fontShrikhand.className}
              display={'inline-block'}
              w={'1rem'}
              h={'1rem'}
              style={{ overflowY: 'hidden' }}
              ml={-4}
              mr={-6}
              pb={4}
              lh={1}
              fz={fz}
              fw={800}
              ta="center"
              key={index}
            >
              {digit}
            </Box>
          )
        if (digit.match(/\d/) === null) return null
        return (
          <CounterUnitWrapper
            digit={digit}
            index={index}
            rollSpeed={rollSpeed}
            initialRollAnimation={initialRollAnimation}
            fz={fz}
            key={index}
          />
        )
      })}
    </>
  )
}

export { Component as OCounter }

type CounterUnitWrapperProps = {
  digit: string
  rollSpeed: number
  fz: number
  index: number
  initialRollAnimation: boolean
}

const CounterUnitWrapper: FC<CounterUnitWrapperProps> = ({
  digit,
  rollSpeed,
  fz,
  index,
  initialRollAnimation,
}) => {
  const startNum = useRef(
    initialRollAnimation ? Math.random() * 10 : Number(digit)
  )
  return (
    <ECounterUnit
      rollSpeed={rollSpeed}
      delay={index * 0.1}
      startNum={startNum.current}
      goalNum={Number(digit)}
      fz={fz}
      key={index}
    />
  )
}
