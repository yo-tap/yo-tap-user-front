import { AnsweredContent } from './Answer'
import { SubmissionEntity } from './SubMission'

export type AnswerEntity = {
  uniqueKey: string
  points: number
  contents: AnsweredContent[]
  subMissions: SubmissionEntity[]
}
