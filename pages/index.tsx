import { registeredLoginUserRootUrl } from '@/helpers/url.helper'
import { useAppAuthentication } from '@/hooks/useAppAuthentication'
import Link from 'next/link'

export default function Home() {
  // resources ------------------------------
  const { login, loginned } = useAppAuthentication({
    redirectUrl: registeredLoginUserRootUrl(),
  })

  // page ------------------------------
  return (
    <>
      <div>Top</div>

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
    </>
  )
}
