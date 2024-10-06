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
        <Box>
          <Flex
            mt={24}
            fz={32}
            justify="center"
            ta="center"
            lh={1.5}
            className={fontShrikhand.className}
          >
            Thank You <br />
            for your Swipe!
          </Flex>

          <Flex
            fz={22}
            justify="center"
            className={fontShrikhand.className}
            c="#F80A07"
          >
            <Box>You get rewards!</Box>
          </Flex>

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
                  rollSpeed={10}
                  initialRollAnimation={true}
                  fz={36}
                  num={point}
                />
              </Flex>
            </Flex>
          </Flex>

          <Flex justify={'center'} mt={16} ta="center">
            <Box>
              Whiteslistに登録で
              <br />
              ポイントを保存することができます
            </Box>
          </Flex>

          <Flex direction="column" mt={24} align="center">
            <Box w={358}>
              <OActionButton earnablePoint={2000} onClick={() => {}}>
                Get whitelisted!
              </OActionButton>
              <OActionButton mt={12} earnablePoint={200} onClick={() => {}}>
                Share Url to X
              </OActionButton>
              <OActionButton
                mt={12}
                checked={true}
                earnablePoint={20}
                onClick={() => {}}
              >
                Follow X
              </OActionButton>

              {/* {answeredContents.map((answeredContent, index) => {
                return (
                  <>
                    <div>{answeredContent.serveyTitle}</div>
                    <div key={index}>{answeredContent.answeredLabelString}</div>
                  </>
                )
              })} */}
            </Box>
            <Box mt={24} c="#F80A07" style={{ textDecoration: 'underline' }}>
              ご提案・ご意見
            </Box>
          </Flex>
        </Box>
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
