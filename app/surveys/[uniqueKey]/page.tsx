import { SAnswerSurveyScreen } from '@/components/04_screens/SAnswerServeyScreen'
import { SurveyEntity } from '@/types/Survey'
import { notFound } from 'next/navigation'

const Page = async ({
  params,
}: {
  params: {
    uniqueKey: string
  }
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOSTING_URL}/api/surveys/${params.uniqueKey}`,
    { cache: 'no-store' }
  )
  const surveyEntity: SurveyEntity = await response.json()

  if (!surveyEntity || !surveyEntity.uniqueKey) {
    return notFound()
  }

  return (
    <>
      <SAnswerSurveyScreen surveyEntity={surveyEntity} />
    </>
  )
}

export default Page
