// app/api/surveys/[id]/route.ts
import { adminAuth } from '@/lib/firebase-admin'
import { prisma } from '@/lib/prisma'
import { SurveyEntity } from '@/types/Survey'
import { SurveyQuestionEntity } from '@/types/SurveyQuestion'
import { generateHashId } from '@/utils/generate-id.util'
import { User } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  _: NextRequest,
  { params }: { params: { uniqueKey: string } }
) {
  try {
    const survey = await prisma.survey.findUnique({
      where: {
        uniqueKey: params.uniqueKey,
      },
    })

    if (!survey) {
      return NextResponse.json({ error: 'Survey not found' }, { status: 404 })
    }

    const surveyEntity: SurveyEntity = {
      uniqueKey: survey.uniqueKey,
      name: survey.name || '',
      imageUrl: survey.imageUrl || '',
      contents: (survey.contents as SurveyQuestionEntity[]) || [],
    }
    return NextResponse.json(surveyEntity, { status: 200 })
  } catch (error) {
    console.error('Error fetching survey:', error)
    return NextResponse.json(
      { error: 'Failed to fetch survey' },
      { status: 500 }
    )
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    const authHeader = request.headers.get('Authorization')
    if (!authHeader) {
      return NextResponse.json(
        { error: 'Authorization header is missing' },
        { status: 401 }
      )
    }

    const idToken = authHeader.split('Bearer ')[1]
    if (!idToken) {
      return NextResponse.json(
        { error: 'Invalid Authorization header format' },
        { status: 401 }
      )
    }

    const decodedToken = await adminAuth.verifyIdToken(idToken)
    const uid = decodedToken.uid

    let user: User
    const existsUser = await prisma.user.findUnique({
      where: {
        firebaseUid: uid,
      },
    })
    if (!existsUser) {
      user = await prisma.user.create({
        data: {
          uniqueKey: generateHashId(),
          firebaseUid: uid,
        },
      })
    } else {
      user = existsUser
    }

    // リクエストボディから JSON データを取得
    const body = await request.json()
    const { contents, name, imageUrl } = body

    // TODO you already answerd

    const answer = await prisma.survey.create({
      data: {
        uniqueKey: generateHashId(),
        name,
        imageUrl,
        user: {
          connect: {
            id: user.id,
          },
        },
        contents: contents as any,
      },
    })

    console.log('Answer:', answer)

    return NextResponse.json(
      { message: `Survey ID: ${id} fetched successfully` },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching survey:', error)
    return NextResponse.json(
      { error: 'Failed to fetch survey' },
      { status: 500 }
    )
  }
}
