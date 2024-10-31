import { LucideIcon } from "lucide-react"
import Link from "next/link"

import { APP_NAME } from "@/shared/config"
import { CoffeeIcon, GithubIcon } from "@/shared/ui"

const socialLinks: { url: string; icon: LucideIcon }[] = [
  {
    url: "https://github.com/svyatoslavw/cv-editor",
    icon: GithubIcon
  },
  {
    url: "https://ko-fi.com/svyatoslavw",
    icon: CoffeeIcon
  }
]

const Footer = () => {
  return (
    <footer className="mb-2 flex w-full flex-col items-center justify-center gap-2 text-xs font-medium">
      <div className="flex justify-center gap-2">
        {socialLinks.map((link) => {
          return (
            <Link
              key={link.url}
              className="cursor-pointer transition-opacity md:hover:opacity-50"
              href={link.url}
              target="_blank"
            >
              <link.icon className="size-4" fill="#000" />
            </Link>
          )
        })}
      </div>
      <div>
        {APP_NAME.SHORT} &copy; {new Date().getFullYear()}. All rights reserved | design by{" "}
        <Link href="https://github.com/svyatoslavw" rel="noopener noreferrer" target="_blank">
          svyatoslavw
        </Link>
        .
      </div>
    </footer>
  )
}

export { Footer }
