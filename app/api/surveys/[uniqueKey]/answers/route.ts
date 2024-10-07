// app/api/surveys/[id]/route.ts
import { adminAuth } from '@/lib/firebase-admin'
import { prisma } from '@/lib/prisma'
import { AnswerEntity } from '@/types/AnswerEntity'
import { SubmissionEntity } from '@/types/SubMission'
import { generateHashId } from '@/utils/generate-id.util'
import { User } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { uniqueKey: string } }
) {
  try {
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

    const survey = await prisma.survey.findUnique({
      where: {
        uniqueKey: params.uniqueKey,
      },
    })
    if (!survey) {
      return NextResponse.json({ error: 'Survey not found' }, { status: 404 })
    }

    const answer = await prisma.answer.findUnique({
      where: {
        userId_surveyId: {
          surveyId: survey.id,
          userId: user.id,
        },
      },
    })

    if (!answer) {
      return NextResponse.json({ error: 'Answer not found' }, { status: 404 })
    }

    const answerEntity: AnswerEntity = {
      uniqueKey: answer.uniqueKey,
      points: answer.points,
      contents: answer.contents as any,
      subMissions: answer.subMissions as any,
    }

    return NextResponse.json(answerEntity, { status: 200 })
  } catch (error) {
    console.error('Error fetching answer:', error)
    return NextResponse.json(
      { error: 'Failed to fetch answers' },
      { status: 500 }
    )
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { uniqueKey: string } }
) {
  try {
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
    const { contents, points } = body

    const survey = await prisma.survey.findUnique({
      where: {
        uniqueKey: params.uniqueKey,
      },
    })
    if (!survey) {
      return NextResponse.json({ error: 'Survey not found' }, { status: 404 })
    }

    const answer = await prisma.answer.findUnique({
      where: {
        userId_surveyId: {
          surveyId: survey.id,
          userId: user.id,
        },
      },
    })

    if (answer) {
      return NextResponse.json({ error: 'Already Answered' }, { status: 403 })
    }

    const createdAnswer = await prisma.answer.create({
      data: {
        uniqueKey: generateHashId(),
        contents: contents as any,
        points: points,
        user: {
          connect: {
            id: user.id,
          },
        },
        survey: {
          connect: {
            id: survey.id,
          },
        },
      },
    })

    const answerEntity: AnswerEntity = {
      uniqueKey: createdAnswer.uniqueKey,
      points: createdAnswer.points,
      contents: createdAnswer.contents as any,
      subMissions: [],
    }

    return NextResponse.json(answerEntity, { status: 200 })
  } catch (error) {
    console.error('Error fetching survey:', error)
    return NextResponse.json(
      { error: 'Failed to fetch survey' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { uniqueKey: string } }
) {
  try {
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

    const survey = await prisma.survey.findUnique({
      where: {
        uniqueKey: params.uniqueKey,
      },
    })
    if (!survey) {
      return NextResponse.json({ error: 'Survey not found' }, { status: 404 })
    }

    // リクエストボディから JSON データを取得
    const body = await request.json()
    const { subMission, point } = body

    const answer = await prisma.answer.findUnique({
      where: {
        userId_surveyId: {
          surveyId: survey.id,
          userId: user.id,
        },
      },
    })
    if (!answer) {
      return NextResponse.json({ error: 'Answer not found' }, { status: 404 })
    }

    let subMissions: SubmissionEntity[] = []
    if (answer?.subMissions) {
      subMissions = answer.subMissions as unknown as SubmissionEntity[]
    } else {
      subMissions = []
    }
    console.log('subMissions|||||||||||||||||||', subMissions)

    const updatedAnswer = await prisma.answer.update({
      where: {
        userId_surveyId: {
          surveyId: survey.id,
          userId: user.id,
        },
      },
      data: {
        subMissions: [...subMissions, subMission],
        points: answer?.points + point,
      },
    })

    const answerEntity: AnswerEntity = {
      uniqueKey: updatedAnswer.uniqueKey,
      points: updatedAnswer.points,
      contents: updatedAnswer.contents as any,
      subMissions: updatedAnswer.subMissions as any,
    }

    return NextResponse.json(answerEntity, { status: 200 })
  } catch (error) {
    console.error('Error fetching answer:', error)
    return NextResponse.json(
      { error: 'Failed to fetch answers' },
      { status: 500 }
    )
  }
}
