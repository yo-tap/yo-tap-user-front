'use server'
import { OAnswerServeyScreen } from '@/components/04_screens/OAnswerServeyScreen'
import { SurveyEntity } from '@/types/Survey'

const Page = async ({
  params,
}: {
  params: {
    uniqueKey: string
  }
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOSTING_URL}/api/serveys/${params.uniqueKey}`
  )
  const surveyEntity: SurveyEntity = await response.json()

  if (!surveyEntity) {
    return <div>Survey not found</div>
  }

  return (
    <>
      <OAnswerServeyScreen surveyEntity={surveyEntity} />
      <div>{surveyEntity.name}</div>
    </>
  )
}

export default Page
