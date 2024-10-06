'use '
import { OAnswerServeyScreen } from '@/components/04_screens/OAnswerServeyScreen'
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
    `${process.env.NEXT_PUBLIC_HOSTING_URL}/api/serveys/${params.uniqueKey}`,
    { cache: 'no-store' }
  )
  const surveyEntity: SurveyEntity = await response.json()

  if (!surveyEntity || !surveyEntity.uniqueKey) {
    return notFound()
  }

  return (
    <>
      <OAnswerServeyScreen surveyEntity={surveyEntity} />
    </>
  )
}

export default Page
