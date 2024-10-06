import { fontInterItalic, fontShrikhand } from '@/utils/fonts'
import { Box, Flex, FlexProps, Text } from '@mantine/core'
import { FC, ReactNode } from 'react'
import style from './style.module.scss'

type Props = FlexProps & {
  children: ReactNode
  checked?: boolean
  earnablePoint?: number
  onClick?: () => void
}
const Component: FC<Props> = ({
  checked,
  earnablePoint,
  onClick,
  children,
  ...props
}) => {
  return (
    <>
      <Flex
        w="100%"
        h={56}
        align="center"
        justify="space-between"
        c={checked ? '#ffffff' : '#000000'}
        bg={checked ? '#F80A07' : '#ffffff'}
        px={24}
        style={{
          borderRadius: 43,
          border: 'solid 1px #000000',
          boxShadow: '4px 4px 0px rgba(0, 0, 0, 1)',
          cursor: 'pointer',
        }}
        onClick={onClick}
        {...props}
      >
        <Flex align="center" justify="center">
          {checked ? (
            <>
              <Box mt={1} fz={16}>
                ✅
              </Box>
            </>
          ) : (
            <>
              <Box
                w={16}
                h={16}
                bg="#ffffff"
                style={{ border: 'solid 1px #000000' }}
              />
            </>
          )}
          <Text pl={16} className={fontInterItalic.className} fz={24}>
            {children}
          </Text>
        </Flex>
        <Flex align="start">
          <Box fz={20} className={fontShrikhand.className}>
            +{earnablePoint}
          </Box>
          <Box pl={4} fz={12} className={fontShrikhand.className}>
            yo
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export { Component as OActionButton }
