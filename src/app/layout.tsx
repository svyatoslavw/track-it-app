import { Link } from "@nextui-org/link"
import clsx from "clsx"
import { Metadata, Viewport } from "next"
import { Rethink_Sans as FontSans } from "next/font/google"

import { Providers } from "./providers"
import "@/shared/styles/globals.css"
import { Sidebar } from "@/shared/ui"

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

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
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
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex h-screen bg-foreground-50">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-y-auto">
              <main className="container w-full max-w-7xl flex-grow px-6 pt-10">{children}</main>
              <footer className="flex w-full items-center justify-center py-3">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                  title="nextui.org homepage"
                >
                  <span className="text-default-600">Powered by</span>
                  <p className="text-primary">NextUI</p>
                </Link>
              </footer>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
