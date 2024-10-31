"use client"

import { cn } from "@nextui-org/theme"
import {
  AlignLeftIcon,
  BugIcon,
  ChartSplineIcon,
  HouseIcon,
  LucideIcon,
  MessageSquareShareIcon,
  RocketIcon,
  Settings2Icon
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { UserInfo } from "@/entities/user"
import { ROUTES, SIDEBAR_TITlES } from "@/shared/config"
import { IUser } from "@/shared/lib"
import { Logotype } from "@/shared/ui"

interface SidebarLink {
  title: string
  url: string
  icon: LucideIcon
}

const topNavLinks: SidebarLink[] = [
  {
    title: SIDEBAR_TITlES.HOME,
    url: ROUTES.HOME,
    icon: HouseIcon
  },
  {
    title: SIDEBAR_TITlES.HABITS,
    url: ROUTES.HABITS,
    icon: RocketIcon
  },
  {
    title: SIDEBAR_TITlES.ANALYTICS,
    url: ROUTES.ANALYTICS,
    icon: ChartSplineIcon
  },
  {
    title: SIDEBAR_TITlES.CATEGORIES,
    url: ROUTES.CATEGORIES,
    icon: AlignLeftIcon
  },
  {
    title: SIDEBAR_TITlES.SETTINGS,
    url: ROUTES.SETTINGS,
    icon: Settings2Icon
  }
]

const bottomNavLinks: SidebarLink[] = [
  {
    title: SIDEBAR_TITlES.FEEDBACK,
    url: ROUTES.FEEDBACK,
    icon: MessageSquareShareIcon
  },
  {
    title: SIDEBAR_TITlES.ISSUE,
    url: ROUTES.ISSUE,
    icon: BugIcon
  }
]

const Sidebar = ({ user }: { user: IUser | undefined }) => {
  const pathname = usePathname()

  return (
    <>
      <div className="h-screen overflow-hidden">
        <input className="hidden" id="sidebar-toggle" type="checkbox" />
        <div className="flex h-full">
          <div className="fixed-no-scroll hidden h-full flex-none bg-foreground-200 md:flex">
            <div className="flex h-screen flex-col items-start justify-between p-4 md:p-8">
              <nav className={"item-center flex w-full flex-col items-start gap-4 md:w-40 lg:w-56"}>
                <Logotype />
                {topNavLinks.map((link) => {
                  return (
                    <Link
                      key={link.url}
                      className={cn(
                        "flex items-center gap-2 font-bold text-foreground/70 hover:text-foreground",
                        {
                          "text-foreground": pathname === link.url
                        }
                      )}
                      href={link.url}
                    >
                      <link.icon size={16} />
                      <span> {link.title}</span>
                    </Link>
                  )
                })}
              </nav>
              <nav className={"item-center flex w-full flex-col items-start gap-4 md:w-40 lg:w-56"}>
                {bottomNavLinks.map((link) => {
                  return (
                    <Link
                      key={link.url}
                      className="flex items-center gap-2 font-bold text-foreground/70 hover:text-foreground"
                      href={link.url}
                    >
                      <link.icon size={16} />
                      <span> {link.title}</span>
                    </Link>
                  )
                })}
                {user && <UserInfo user={user} />}
              </nav>
            </div>
          </div>
        </div>
        <label
          aria-label="Open Menu"
          className="label fixed right-10 top-5 z-50 cursor-pointer rounded-md bg-background/80 px-[3px] py-[8px] backdrop-blur-3xl md:right-[32px] md:top-[32px] md:hidden"
          htmlFor="sidebar-toggle"
        >
          <div className="hamburger-menu">
            <div className="hamburger-bar bar1" />
            <div className="hamburger-bar bar2" />
            <div className="hamburger-bar bar3" />
          </div>
        </label>
      </div>
    </>
  )
}

export { Sidebar }
