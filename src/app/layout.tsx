import clsx from "clsx"
import { Metadata, Viewport } from "next"
import { Rethink_Sans } from "next/font/google"

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

const fontSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["system-ui", "sans-serif"],
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
        <meta content="yes" name="mobile-web-app-capable" />
        <link href="/favicon.ico" rel="icon" sizes="48x48" />
        <link href="/icon?<generated>" rel="icon" sizes="<generated>" type="image/<generated>" />
        <link
          href="/apple-icon?<generated>"
          rel="apple-touch-icon"
          sizes="<generated>"
          type="image/<generated>"
        />
      </head>
      <body className={clsx("min-h-screen font-sans antialiased", fontSans.className)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>{children}</Providers>
      </body>
    </html>
  )
}
