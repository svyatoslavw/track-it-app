import clsx from "clsx"
import { Metadata, Viewport } from "next"
import { Rethink_Sans as FontSans } from "next/font/google"

import { Providers } from "./providers"
import "@/shared/styles/globals.css"

export const metadata: Metadata = {
  title: {
    default: "TrackIt",
    template: `%s - TrackIt`
  },
  description: "TrackIt is a tool for tracking your progress and achieving your goals.",
  icons: {
    icon: "/favicon.ico"
  }
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["Helvetica", "Arial", "sans-serif"],
  weight: ["400", "500", "600", "700", "800"]
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx("min-h-screen font-sans antialiased", fontSans.variable)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>{children}</Providers>
      </body>
    </html>
  )
}
