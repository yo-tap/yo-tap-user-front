'use client'
import { registeredLoginUserRootUrl } from '@/helpers/url.helper'
import { useAppAuthentication } from '@/hooks/useAppAuthentication'
import Link from 'next/link'
import { FC } from 'react'

const Component: FC = () => {
  // resources ------------------------------
  const { login, loginned } = useAppAuthentication({
    redirectUrl: registeredLoginUserRootUrl(),
  })

  return (
    <div>
      {loginned ? (
        <>
          <Link
            href={registeredLoginUserRootUrl()}
            style={{ textDecoration: 'underline' }}
          >
            Start
          </Link>
        </>
      ) : (
        <>
          <div onClick={login} style={{ textDecoration: 'underline' }}>
            Login
          </div>
        </>
      )}
    </div>
  )
}

export { Component as LoginButton }
