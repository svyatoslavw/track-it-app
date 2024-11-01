import clsx from "clsx"
import { Metadata, Viewport } from "next"
import { Rethink_Sans as FontSans } from "next/font/google"

import { Providers } from "./providers"
import { APP_METADATA, APP_TITLE } from "@/shared/config"
import "@/shared/styles/globals.css"

export const metadata: Metadata = {
  title: {
    default: APP_TITLE,
    template: `%s | ${APP_TITLE}`
  },
  ...APP_METADATA
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
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={clsx("min-h-screen font-sans antialiased", fontSans.variable)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>{children}</Providers>
      </body>
    </html>
  )
}
