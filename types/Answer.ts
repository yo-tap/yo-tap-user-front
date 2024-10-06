import { ReactNode } from 'react'

export type AnsweredContent = {
  uniqueKey: string
  serveyTitle: ReactNode
  answer: 'left' | 'right'
  answeredLabelString: string
  point: number
  answeredAt: Date
}
