import { SurveyEntity } from '@/types/Survey'
import { surveyQuestionsMock } from './surveyQuestions.mock'

export const surveyEntityMock: SurveyEntity = {
  uniqueKey: 'uniqueKey',
  name: 'name',
  imageUrl: 'imageUrl',
  contents: surveyQuestionsMock,
}
