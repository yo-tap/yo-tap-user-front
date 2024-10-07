// app/api/surveys/[id]/route.ts
import { adminAuth } from '@/lib/firebase-admin'
import { prisma } from '@/lib/prisma'
import { generateHashId } from '@/utils/generate-id.util'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
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

    // リクエストボディから JSON データを取得
    const body = await request.json()
    const { email } = body

    const existsUser = await prisma.user.findUnique({
      where: {
        firebaseUid: uid,
      },
    })
    if (!existsUser) {
      await prisma.user.create({
        data: {
          uniqueKey: generateHashId(),
          firebaseUid: uid,
          email,
        },
      })
    } else {
      await prisma.user.update({
        where: {
          id: existsUser.id,
        },
        data: {
          email,
        },
      })
    }

    return NextResponse.json({ message: `Email Registered!` }, { status: 200 })
  } catch (error) {
    console.error('Error fetching survey:', error)
    return NextResponse.json(
      { error: 'Failed to fetch survey' },
      { status: 500 }
    )
  }
}
