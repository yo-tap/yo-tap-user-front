import { SurveyQuestionEntity } from './SurveyQuestion'

export type SurveyEntity = {
  uniqueKey: string
  name: string
  imageUrl: string
  contents: SurveyQuestionEntity[]
}
