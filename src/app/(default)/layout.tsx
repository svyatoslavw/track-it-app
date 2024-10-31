import { auth } from "@/auth"
import "@/shared/styles/globals.css"
import { Footer, Sidebar } from "@/widgets"

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()

  return (
    <div className="relative flex h-screen bg-foreground-200">
      <Sidebar user={session?.user} />
      <div className="flex flex-1 flex-col overflow-y-auto">
        <main className="container mb-4 w-full max-w-7xl flex-grow px-6">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
