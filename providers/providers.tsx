'use client'

import GoogleAnalyticsV4, {
  GoogleAnalyticsId,
  googleAnalyticsId,
} from '@/components/GoogleAnalyticsV4'
import { applicationProperties } from '@/constants/applicationProperties'
import { PrivyProvider } from '@privy-io/react-auth'
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react' // Provider imports 'rollbar'

const rollbarConfig = {
  accessToken: applicationProperties.ROLLBAR_ACCESS_TOKEN,
  environment: applicationProperties.ROLLBAR_ENVIRONMENT,
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    client: {
      javascript: {
        code_version: '1.0.0',
        source_map_enabled: true,
      },
    },
  },
}

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <RollbarProvider config={rollbarConfig}>
      <ErrorBoundary>
        <GoogleAnalyticsV4
          googleAnalyticsId={googleAnalyticsId as GoogleAnalyticsId}
        />
        <PrivyProvider
          appId={applicationProperties.PRIVY_APP_ID}
          config={{
            // Customize Privy's appearance in your app
            appearance: {
              theme: 'light',
              accentColor: '#ff0000',
            },
            // Create embedded wallets for users who don't have a wallet
            embeddedWallets: {
              createOnLogin: 'users-without-wallets',
            },
          }}
        >
          {children}
        </PrivyProvider>
      </ErrorBoundary>
    </RollbarProvider>
  )
}

export { Providers }
