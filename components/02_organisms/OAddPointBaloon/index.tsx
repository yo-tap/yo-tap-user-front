import { Box } from '@mantine/core'
import { motion } from 'framer-motion'
import { FC, useState } from 'react'
import { colorScheme } from '../../../theme/colorScheme'

type Props = {
  trigger: boolean
  counter: number
  addableTotalPoint?: number
  isBoosting?: boolean
  animationEnabled?: boolean
}

const animateDurationSecond = 1.5

const Component: FC<Props> = ({
  addableTotalPoint,
  isBoosting,
  animationEnabled = true,
}) => {
  const [localTrigger, setLocalTrigger] = useState(animationEnabled)

  const resetTrigger = () => {
    setLocalTrigger(false)
  }

  if (!addableTotalPoint) return null

  return (
    <>
      <motion.div
        variants={{
          hidden: { y: -12, opacity: 0 },
          visible: {
            y: y,
            opacity: opacity,
            transition: {
              duration: animateDurationSecond,
              ease: 'linear',
            },
          },
        }}
        initial="hidden"
        animate={localTrigger ? 'visible' : 'hidden'}
        onAnimationComplete={resetTrigger}
      >
        <Box
          w="100%"
          bg={
            isBoosting
              ? colorScheme.scheme1.accent2.surface
              : colorScheme.scheme1.accent1.surface
          }
          ta="center"
          // fz={ballonFz(addableTotalPoint, isBoosting)}
          fz={32}
          py={1}
          px={8}
          ff="outfit"
          fw={700}
          c="white"
          style={{ borderRadius: 24 }}
        >
          +{addableTotalPoint.toLocaleString()}
        </Box>
      </motion.div>
    </>
  )
}

export { Component as OAddPointBaloon }

// private components----

const generateSinWave = (points: number, amplitude: number, offset: number) => {
  const y: number[] = []
  const opacity: number[] = []
  for (let i = 0; i <= points; i++) {
    const x = (i / points) * 2 * Math.PI // 0 から 2π まで
    y.push(Math.sin(x) * amplitude + offset)
    opacity.push(Math.sin(x)) // 透明度は 0 から 1 の間で変化
  }
  return { y, opacity }
}

const { y, opacity } = generateSinWave(10, -20, -12)
