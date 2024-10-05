'use client'
import { auth } from '@/lib/firebase'
import { signInAnonymously } from 'firebase/auth'
import { useEffect } from 'react'

// app/page.tsx
const Page = () => {
  useEffect(() => {
    ;(async () => {
      // sign in anonymously
      const userCredential = await signInAnonymously(auth)
      const jwt = await userCredential.user.getIdToken()
      const response = await fetch('/api/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`, // JWT を Authorization ヘッダーにセット
        },
      })
      console.log('response-------------', response)

      const response2 = await fetch('/api/serveys/1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`, // JWT を Authorization ヘッダーにセット
        },
        body: JSON.stringify({
          contents: [
            {
              question: "What's your favorite color?",
              options: ['Red', 'Green', 'Blue'],
            },
          ],
          name: 'Favorite Color Survey',
          imageUrl: 'https://source.unsplash.com/random',
        }),
      })
      console.log('response2-------------', response2)
    })()
  }, [])

  return <></>
}

export default Page
