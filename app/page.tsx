import { CardSwiper } from '@/components/CardSwiper'
import { fontShrikhand } from '@/utils/fonts'
import { Box, Flex, Progress } from '@mantine/core'
import Image from 'next/image'

// app/page.tsx
const Page = () => {
  return (
    <div>
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

          <Box pl={8} pt={3} fz={16} className={fontShrikhand.className}>
            32,312
          </Box>
        </Flex>
      </Flex>

      <Flex h={3} align="top" justify="left">
        <Progress w="25%" h={2} mr={1} value={50} color="red" />
        <Progress w="25%" h={2} mx={1} value={0} color="red" />
        <Progress w="25%" h={2} mx={1} value={0} color="red" />
        <Progress w="25%" h={2} ml={1} value={0} color="red" />
      </Flex>

      <CardSwiper />
    </div>
  )
}

export default Page
