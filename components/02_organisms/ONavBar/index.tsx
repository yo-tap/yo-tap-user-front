import { Flex } from '@mantine/core'
import Image from 'next/image'
import { FC } from 'react'
import { OCounter } from '../OCounter'

type Props = {
  point: number
}

const Component: FC<Props> = ({ point }) => {
  return (
    <>
      <Flex h={56} px={24} justify="space-between">
        <Flex align="center">
          <Image
            src="/assets/images/logo/logo_yotap_red.svg"
            width={80}
            height={16}
            alt="Yotap logo"
          />
        </Flex>
        <Flex align="center">
          <Image
            src="/assets/images/ticker/ticker_yo.png"
            width={20}
            height={20}
            alt="Yotap ticker"
          />

          <Flex pl={8} pt={3}>
            <OCounter
              rollSpeed={2}
              initialRollAnimation={false}
              fz={16}
              num={point}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export { Component as ONavBar }
