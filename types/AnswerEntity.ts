import { AnsweredContent } from './Answer'

export type AnswerEntity = {
  uniqueKey: string
  points: number
  contents: AnsweredContent[]
}
