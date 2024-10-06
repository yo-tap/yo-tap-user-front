export type AnsweredContent = {
  uniqueKey: string
  serveyTitle: string
  answer: 'left' | 'right'
  answeredLabelString: string
  point: number
  answeredAt: Date
}
