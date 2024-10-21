"use client"

import { Badge } from "@nextui-org/badge"
import { cn } from "@nextui-org/theme"
import {
  AlignLeftIcon,
  BugIcon,
  ChartSplineIcon,
  HouseIcon,
  LucideIcon,
  MessageSquareShareIcon,
  Settings2Icon
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { ROUTES, SIDEBAR_TITlES } from "@/shared/config"

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

const Sidebar = () => {
  const pathname = usePathname()
  const withLogo = true

  return (
    <>
      <div className="h-screen overflow-hidden">
        <input type="checkbox" id="sidebar-toggle" className="hidden" />
        <div className="flex h-full">
          <div className="fixed-no-scroll hidden h-full flex-none bg-foreground-50 md:flex">
            <div className="flex h-screen flex-col items-start justify-between p-4 md:p-8">
              <nav className={"item-center flex w-full flex-col items-start gap-4 md:w-56"}>
                {withLogo && (
                  <Badge
                    content={
                      <span className="rounded-md bg-primary px-1.5 text-xs text-foreground-50">
                        Beta
                      </span>
                    }
                    classNames={{
                      badge: "right-3 border-0 bg-transparent cursor-pointer md:hover:opacity-hover"
                    }}
                  >
                    <Link className="flex select-none items-center justify-start gap-1" href="/">
                      <Image
                        draggable={false}
                        src="/logo5.webp"
                        alt="logo"
                        width={70}
                        height={70}
                        className="rounded-2xl"
                      />
                    </Link>
                  </Badge>
                )}
                {topNavLinks.map((link) => {
                  return (
                    <Link
                      className={cn(
                        "flex items-center gap-2 font-bold text-foreground/70 hover:text-foreground",
                        {
                          "text-foreground": pathname === link.url
                        }
                      )}
                      key={link.url}
                      href={link.url}
                    >
                      <link.icon size={16} />
                      <span> {link.title}</span>
                    </Link>
                  )
                })}
              </nav>
              <nav className={"item-center flex w-full flex-col items-start gap-4 md:w-56"}>
                {bottomNavLinks.map((link) => {
                  return (
                    <Link
                      className="flex items-center gap-2 font-bold text-foreground/70 hover:text-foreground"
                      key={link.url}
                      href={link.url}
                    >
                      <link.icon size={16} />
                      <span> {link.title}</span>
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
        <label
          aria-label="Open Menu"
          htmlFor="sidebar-toggle"
          className="label fixed right-10 top-5 z-50 cursor-pointer rounded-md bg-background/80 px-[3px] py-[8px] backdrop-blur-3xl md:right-[32px] md:top-[32px] md:hidden"
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
