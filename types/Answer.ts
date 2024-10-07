export type AnsweredContent = {
  uniqueKey: string
  surveyTitle: string
  answer: 'left' | 'right'
  answeredLabelString: string
  point: number
  answeredAt: Date
}
