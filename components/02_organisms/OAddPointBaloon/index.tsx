import { Box } from '@mantine/core'
import { motion } from 'framer-motion'
import { FC, useState } from 'react'
import { colorScheme } from '../../../theme/colorScheme'
import { fontShrikhand } from '@/utils/fonts'

type Props = {
  sentence: string
  addableTotalPoint?: number
  isBoosting?: boolean
  animationEnabled?: boolean
}

const animateDurationSecond = 2

const Component: FC<Props> = ({
  sentence,
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
          hidden: { y: -24, opacity: 0, rotateZ: -45 },
          visible: {
            y: y,
            rotateZ: 90,
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
          py={1}
          px={16}
          c="white"
          style={{
            borderRadius: 12,
          }}
          className={fontShrikhand.className}
        >
          <Box
            fz={16}
            style={{
              textShadow: '2px 2px 0px rgba(0, 0, 0, 1)',
            }}
          >
            LIKED!
          </Box>
          <Box
            mt={-12}
            mb={-6}
            fw={700}
            fz={32}
            style={{
              textShadow: '4px 4px 0px rgba(0, 0, 0, 1)',
            }}
          >
            +{addableTotalPoint.toLocaleString()}
          </Box>
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
