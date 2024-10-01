// app/layout.tsx
import { Providers } from '@/providers/providers'
import { ColorSchemeScript, Container } from '@mantine/core'
import '@mantine/core/styles.css'
import '@/styles/globals.scss'
import React from 'react'
import { applicationProperties } from '@/constants/applicationProperties'

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
            <Container maw={applicationProperties.CONTENT_MAX_WIDTH}>
              {children}
            </Container>
          </Providers>
        </body>
      </html>
    </>
  )
}
