import { SurveyEntity } from '@/types/Survey'
import { fontShrikhand } from '@/utils/fonts'
import { Box, Flex } from '@mantine/core'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'
import { OCounter } from '../OCounter'
import { Follow } from './Follow'
import { useAnswerComplete } from './hooks'
import { Share } from './Share'
import { GetWhitelisted } from './GetWhitelisted'

type Props = {
  point: number
  surveyEntity: SurveyEntity
  addPoint: (point: number) => void
}

const Component: FC<Props> = ({ point, surveyEntity, addPoint }) => {
  const { follow, share, doneFw, doneSh, doneGw, getWhitelisted } =
    useAnswerComplete(surveyEntity, addPoint)

  return (
    <Box>
      <motion.div
        variants={{
          hidden: { y: 24, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.25,
              ease: 'easeOut',
              delay: 0.55,
            },
          },
        }}
        initial="hidden"
        animate={'visible'}
        onAnimationComplete={() => {}}
      >
        <Flex
          mt={24}
          fz={32}
          justify="center"
          ta="center"
          lh={1.25}
          className={fontShrikhand.className}
        >
          Thank You <br />
          for your Swipe!
        </Flex>
      </motion.div>

      <motion.div
        variants={{
          hidden: { y: 24, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.25,
              ease: 'easeOut',
              delay: 0.55,
            },
          },
        }}
        initial="hidden"
        animate={'visible'}
        onAnimationComplete={() => {}}
      >
        <Flex
          my={8}
          fz={22}
          justify="center"
          className={fontShrikhand.className}
          c="#F80A07"
        >
          <Box>You get rewards!</Box>
        </Flex>
      </motion.div>

      <motion.div
        variants={{
          hidden: { y: 0, opacity: 0, scale: 2 },
          visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.25,
              ease: 'easeOut',
              delay: 0.75,
            },
          },
        }}
        initial="hidden"
        animate={'visible'}
        onAnimationComplete={() => {}}
      >
        <Flex justify="center">
          <Flex h={56} justify="start" align="center">
            <Box
              pt={2}
              pr={12}
              fz={36}
              lh={1}
              className={fontShrikhand.className}
            >
              +
            </Box>
            <Flex align="center">
              <Image
                src="/assets/images/ticker/ticker_yo.png"
                width={36}
                height={36}
                alt="Yotap ticker"
              />
            </Flex>

            <Flex pl={8} pt={3}>
              <OCounter
                rollSpeed={3}
                initialRollAnimation={true}
                fz={36}
                num={point}
              />
            </Flex>
          </Flex>
        </Flex>
      </motion.div>

      <motion.div
        variants={{
          hidden: { y: 24, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.25,
              ease: 'easeOut',
              delay: 0.6,
            },
          },
        }}
        initial="hidden"
        animate={'visible'}
        onAnimationComplete={() => {}}
      >
        <Flex justify={'center'} mt={16} ta="center">
          <Box>ご協力ありがとうございました</Box>
        </Flex>
      </motion.div>

      <Flex direction="column" mt={24} align="center">
        <Box w={358}>
          <GetWhitelisted getWhitelisted={getWhitelisted} doneGw={doneGw} />
          <Share share={share} doneSh={doneSh} />
          <Follow follow={follow} doneFw={doneFw} />
        </Box>

        <motion.div
          variants={{
            hidden: { y: 24, opacity: 0, scale: 1 },
            visible: {
              y: 0,
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.25,
                ease: 'easeOut',
                delay: 1,
              },
            },
          }}
          initial="hidden"
          animate={'visible'}
          onAnimationComplete={() => {}}
        >
          <Box mt={24} c="#F80A07" style={{ textDecoration: 'underline' }}>
            ご提案・ご意見
          </Box>
        </motion.div>
      </Flex>
    </Box>
  )
}

export { Component as OAnswerComplete }
