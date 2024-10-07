// app/layout.tsx
import { Providers } from '@/providers/providers'
import '@/styles/globals.scss'
import { Box, ColorSchemeScript, Flex } from '@mantine/core'
import '@mantine/core/styles.css'
import 'material-icons/iconfont/material-icons.css'
import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: 'My Next.js App',
  description: 'This is a simple Next.js app using the new App Router.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="ja">
        <head>
          <ColorSchemeScript />
        </head>
        <body>
          <Providers>
            <Box
              maw="100vw"
              mah="100vh"
              pb={86} // counter padding of logo height
              pos="relative"
              style={{ overflowX: 'hidden' }}
            >
              {children}
            </Box>

            <Flex
              pos="fixed"
              left={0}
              bottom={0}
              justify="center"
              w="100%"
              style={{ overflow: 'hidden', zIndex: -1 }}
            >
              <Box w={428.27} mb={-24} opacity={0.1}>
                <Image
                  src="/assets/images/logo/logo_yotap_black.svg"
                  width={428.27}
                  height={86}
                  alt="Yotap logo"
                />
              </Box>
            </Flex>
          </Providers>
        </body>
      </html>
    </>
  )
}
