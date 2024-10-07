import { auth } from '@/lib/firebase'
import { SurveyEntity } from '@/types/Survey'
import { signInAnonymously } from 'firebase/auth'
import { useCallback, useEffect, useState } from 'react'

export const useAnswerComplete = (
  surveyEntity: SurveyEntity,
  addPoint: (point: number) => void
) => {
  const [doneGw, setDoneGw] = useState(false)
  const [doneFw, setDoneFw] = useState(false)
  const [doneSh, setDoneSh] = useState(false)

  useEffect(() => {
    ;(async () => {
      const userCredential = await signInAnonymously(auth)
      const jwt = await userCredential.user.getIdToken()

      const res = await fetch(
        `/api/surveys/${surveyEntity.uniqueKey}/answers`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
          },
        }
      )

      if (res.status === 200) {
        const answerEntity = await res.json()

        if (
          answerEntity.subMissions &&
          Array.isArray(answerEntity.subMissions) &&
          answerEntity.subMissions.some(
            (subMission) =>
              subMission.uniqueKey === `${surveyEntity.uniqueKey}-gw`
          )
        ) {
          setDoneGw(true)
        }

        if (
          answerEntity.subMissions &&
          Array.isArray(answerEntity.subMissions) &&
          answerEntity.subMissions.some(
            (subMission) =>
              subMission.uniqueKey === `${surveyEntity.uniqueKey}-fw`
          )
        ) {
          setDoneFw(true)
        }

        if (
          answerEntity.subMissions &&
          Array.isArray(answerEntity.subMissions) &&
          answerEntity.subMissions.some(
            (subMission) =>
              subMission.uniqueKey === `${surveyEntity.uniqueKey}-sh`
          )
        ) {
          setDoneSh(true)
        }
      }
    })()
  }, [])

  const missionComplete = useCallback(
    async (uniqueKey: string, name: string, point: number) => {
      const userCredential = await signInAnonymously(auth)
      const jwt = await userCredential.user.getIdToken()

      const resGet = await fetch(
        `/api/surveys/${surveyEntity.uniqueKey}/answers`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`, // JWT を Authorization ヘッダーにセット
          },
        }
      )

      if (resGet.status !== 200) return
      const answerEntity = await resGet.json()

      if (
        answerEntity.subMissions &&
        Array.isArray(answerEntity.subMissions) &&
        answerEntity.subMissions.some(
          (subMission) => subMission.uniqueKey === uniqueKey
        )
      ) {
        alert('You have already completed this mission')
        return
      }

      const res = await fetch(
        `/api/surveys/${surveyEntity.uniqueKey}/answers`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`, // JWT を Authorization ヘッダーにセット
          },
          body: JSON.stringify({
            subMission: {
              uniqueKey,
              name,
              point,
              completedAt: new Date(),
            },
            point: point,
          }),
        }
      )

      if (res.status !== 200) return
      addPoint(point)
    },
    [surveyEntity.uniqueKey]
  )

  const getWhitelisted = useCallback(() => {
    missionComplete(`${surveyEntity.uniqueKey}-gw`, 'getWhitelisted', 212)
    setDoneGw(true)
  }, [missionComplete, surveyEntity.uniqueKey])
  const follow = useCallback(() => {
    missionComplete(`${surveyEntity.uniqueKey}-fw`, 'follow', 99)
    setDoneFw(true)
  }, [missionComplete, surveyEntity.uniqueKey])
  const share = useCallback(() => {
    missionComplete(`${surveyEntity.uniqueKey}-sh`, 'share', 94)
    setDoneSh(true)
  }, [missionComplete, surveyEntity.uniqueKey])

  return { getWhitelisted, follow, share, doneGw, doneFw, doneSh }
}
