import withPWAInit from "@ducanh2912/next-pwa"

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GROQ_API_KEY: process.env.GROQ_API_KEY,
    AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
    AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
    AUTH_SECRET: process.env.AUTH_SECRET,
    APP_URL: process.env.APP_URL
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
        port: "",
        pathname: "/**"
      }
    ]
  }
}

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  extendDefaultRuntimeCaching: true,
  disable: process.env.NODE_ENV === "development"
})

export default withPWA(nextConfig)
