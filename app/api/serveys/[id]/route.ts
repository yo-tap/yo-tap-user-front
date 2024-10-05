// app/api/serveys/[id]/route.ts
import { adminAuth } from '@/lib/firebase-admin'
import { prisma } from '@/lib/prisma'
import { generateHashId } from '@/utils/generate-id.util'
import { User } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    console.log('Survey ID:', id)

    const authHeader = request.headers.get('Authorization')
    if (!authHeader) {
      return NextResponse.json(
        { error: 'Authorization header is missing' },
        { status: 401 }
      )
    }

    const idToken = authHeader.split('Bearer ')[1]
    console.log('ID token:--------------', idToken)
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

    // TODO you already answerd

    const answer = await prisma.answer.create({
      data: {
        uniqueKey: generateHashId(),
        contents: [],
        user: {
          connect: {
            id: user.id,
          },
        },
        servey: {
          connect: {
            id: Number(2),
          },
        },
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
