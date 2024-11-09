import { Metadata } from "next"

import { APP_NAME } from "./names.config"

export const APP_URL = process.env.APP_URL || "http://localhost:3000"

export const NO_INDEX_PAGE = { robots: { index: false, follow: false } }

const SEO = {
  CREATOR: "svyatoslavw",
  GITHUB_URL: "https://github.com/svyatoslavw",
  SITE_KEYWORDS: [
    "TrackIt",
    "TrackIt Intelligence",
    "AI habit tracker",
    "Intelligent habit tracking",
    "AI-powered insights",
    "Smart habit tracking",
    "Habit analysis AI",
    "Track your habits",
    "AI recommendations",
    "Personalized habit insights",
    "PWA habit tracker",
    "Next.js app",
    "Progressive Web App",
    "Productivity app with AI",
    "Track habits with AI",
    "AI-driven goals",
    "Build better habits",
    "AI-powered routines",
    "Track progress with AI",
    "Self-improvement AI",
    "AI goal setting",
    "TrackIt with AI",
    "AI for habit building",
    "Smart reminders",
    "Lifestyle improvement with AI",
    "Motivation tracker with AI",
    "AI analytics for habits",
    "Daily habit tracker with AI",
    "AI habit patterns",
    "TrackIt app with AI",
    "Consistency tracker AI",
    "Automated habit suggestions",
    "Habit optimization",
    "AI for personal growth",
    "Daily goals app AI",
    "Routine improvement with AI",
    "Smart tracking suggestions",
    "Behavior analysis AI",
    "Personalized growth app",
    "AI productivity tools",
    "TrackIt smart suggestions",
    "Advanced habit insights",
    "AI for lifestyle improvement",
    "Track your habits",
    "PWA habit tracker",
    "Next.js app",
    "Progressive Web App",
    "Productivity app",
    "Habit monitor",
    "Track goals",
    "Build better habits",
    "Daily routines",
    "Track progress",
    "Personal growth",
    "Self-improvement",
    "Routine tracker",
    "Goal setting",
    "Next.js habit tracker",
    "React habit tracker",
    "Habit reminders",
    "Habit tracking PWA",
    "TrackIt app",
    "Lifestyle improvement",
    "Motivation tracker",
    "Daily habit tracker",
    "TrackIt PWA",
    "Habit streaks",
    "Consistency tracker",
    "Personal development",
    "Track habits online"
  ]
}

export const APP_TITLE = `${APP_NAME.SHORT} - AI-powered habit tracker`

export const APP_METADATA: Metadata = {
  description: "TrackIt is a tool for tracking your progress and achieving your goals.",
  metadataBase: new URL(APP_URL),
  applicationName: APP_NAME.SHORT,
  creator: SEO.CREATOR,
  authors: {
    name: SEO.CREATOR,
    url: SEO.GITHUB_URL
  },
  keywords: SEO.SITE_KEYWORDS,
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    description: "AI-powered resume builder",
    url: APP_URL,
    locale: "en-US",
    siteName: APP_NAME.SHORT,
    emails: `example@${APP_NAME.SHORT}`,
    images: [
      {
        url: `${APP_URL}/images/opengraph.png`,
        width: 1280,
        height: 640,
        alt: APP_NAME.FULL
      }
    ]
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: APP_NAME.SHORT,
    startupImage: {
      url: "/images/android-chrome-256x256.png"
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: APP_URL
  }
}
