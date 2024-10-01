import { CardSwiper } from '@/components/CardSwiper'
import { LoginButton } from '@/components/LoginButton'
import { applicationProperties } from '@/constants/applicationProperties'
import { fontShrikhand } from '@/utils/fonts'
import { Box, Container, Flex, Progress } from '@mantine/core'
import Image from 'next/image'

// app/page.tsx
const Page = () => {
  return (
    <div>
      <Flex px={24} justify="space-between">
        <Flex align="center">
          <Image
            src="/assets/images/logo/logo_yotap_red.svg"
            width={120}
            height={24}
            alt="Yotap logo"
          />
        </Flex>
        <Flex mt={24} mb={24} align="center">
          <Image
            src="/assets/images/ticker/ticker_yo.png"
            width={28}
            height={28}
            alt="Yotap logo"
          />

          <Box pl={12} pt={3} fz={18} className={fontShrikhand.className}>
            32,312
          </Box>
        </Flex>
      </Flex>

      <Progress h={3} value={50} color="red" />
      {/* <LoginButton /> */}
      <Container maw={applicationProperties.CONTENT_MAX_WIDTH}>
        <Box mt={24}>
          <CardSwiper />
        </Box>
      </Container>
    </div>
  )
}

export default Page
