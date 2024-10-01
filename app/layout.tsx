// app/layout.tsx
import { Providers } from '@/providers/providers'
import '@/styles/globals.scss'
import { Box, ColorSchemeScript } from '@mantine/core'
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
            {children}

            <Box display="block" pos="absolute" left={0} bottom={0}>
              <Box display="block" w="100%" h="20" bg="red">
                {/* <Image
                  src="/assets/images/logo/logo_yotap_black.svg"
                  // width={100}
                  // height={24}
                  alt="Yotap logo"
                /> */}
                aaa
              </Box>
            </Box>
          </Providers>
        </body>
      </html>
    </>
  )
}
