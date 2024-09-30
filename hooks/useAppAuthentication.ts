import { loginUrl, rootUrl } from '@/helpers/url.helper'
import { PrivyAccessTokenRepository } from '@/repositories/PrivyAccessTokenRepository'
import { useLogin, useLogout, usePrivy } from '@privy-io/react-auth'
import { useEffect, useState } from 'react'

type Variables = {
  redirectUrl?: string
}

export const useAppAuthentication = ({ redirectUrl }: Variables = {}) => {
  const { ready, authenticated } = usePrivy()

  const { login } = useLogin({
    onComplete: async (
      user,
      _isNewUser,
      wasAlreadyAuthenticated,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _loginMethod,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _linkedAccount
    ) => {
      if (wasAlreadyAuthenticated) return
    },
    onError: (error) => {
      console.error(error)
    },
  })

  const [loginned, setLoginned] = useState<boolean>(false)

  const { logout } = useLogout({
    onSuccess: () => {
      if (redirectUrl) window.location.href = redirectUrl || rootUrl()
      // Any logic you'd like to execute after a user successfully logs out
    },
  })

  useEffect(() => {
    setLoginned(ready && authenticated)
  }, [ready, authenticated, setLoginned])

  /**
   * ユーザーがゲスト（ログインしていない、またはユーザーデータが不足している）かどうかを確認し必要に応じてリダイレクト。
   *   ユーザーが認証されていない場合、ログアウトしてログインページにリダイレクト
   *   ユーザーのプロフィールが未完成（名前が登録されていない）場合はプロフィール登録ページにリダイレクト
   */
  const checkAndRedirectGuestUser = async () => {
    const accessToken = await PrivyAccessTokenRepository.get()

    if (!accessToken) {
      logout()
      window.location.href = loginUrl()
    }
  }

  return {
    login,
    ready,
    authenticated,
    checkAndRedirectGuestUser,
    loginned,
    logout,
  }
}
