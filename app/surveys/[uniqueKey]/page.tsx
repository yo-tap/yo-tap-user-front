import { SAnswerSurveyScreen } from '@/components/04_screens/SAnswerServeyScreen'
import { SurveyEntity } from '@/types/Survey'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'YoTap: Swipe to Earn',
  description: 'Swipe to earn points and get rewards!',
  openGraph: {
    title: 'YoTap: Swipe to Earn',
    description: 'Swipe to earn points and get rewards!',
    url: 'https://yotap.vercel.app/',
    images: [
      {
        url: 'https://yotap.vercel.app/ogp.png',
        width: 2400,
        height: 1254,
        alt: 'My OGP Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@hanz0chang',
    title: 'YoTap: Swipe to Earn',
    description: 'Swipe to earn points and get rewards!',
    images: ['https://yotap.vercel.app/ogp.png'],
  },
}

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
