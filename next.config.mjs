/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'picsum.photos',
      'example.com',
      'avatars.githubusercontent.com',
      'cloudflare-ipfs.com',
      'hanzochang-sandbox.s3.ap-northeast-1.amazonaws.com',
      'loremflickr.com',
    ],
  },
}

export default nextConfig
