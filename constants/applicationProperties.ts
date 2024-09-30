export const applicationProperties = {
  APP_ENV: process.env.NEXT_PUBLIC_APP_ENV || 'development',
  HOSTING_DOMAIN: process.env.NEXT_PUBLIC_HOSTING_DOMAIN || 'localhost:4000',
  HOSTING_URL: process.env.NEXT_PUBLIC_HOSTING_URL || 'http://localhost:4000',
  GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '',
  ROLLBAR_ACCESS_TOKEN: process.env.NEXT_PUBLIC_ROLLBAR_ACCESS_TOKEN || '',
  ROLLBAR_ENVIRONMENT: process.env.NEXT_PUBLIC_ROLLBAR_ENVIRONMENT || '',
  API_GQL_URL:
    process.env.NEXT_PUBLIC_API_GQL_URL || 'http://localhost:4000/graphql',
  API_REST_URL:
    process.env.NEXT_PUBLIC_API_REST_URL || 'http://localhost:4000/',
  PRIVY_APP_ID: process.env.NEXT_PUBLIC_PRIVY_APP_ID || '',
}
