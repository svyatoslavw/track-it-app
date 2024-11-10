import { Badge } from "@nextui-org/badge"
import Image from "next/image"
import Link from "next/link"

import { cn } from "../lib"

const Logotype = ({ size = "sm" }: { size?: "sm" | "lg" }) => (
  <Badge
    classNames={{
      badge: `${size === "sm" ? "right-3" : "right-8"} border-0 bg-transparent cursor-pointer md:hover:opacity-hover`
    }}
    content={
      <div className="rounded-md p-0.5">
        <span
          className={cn("rounded-md bg-primary px-1.5 text-xs font-medium text-foreground-50", {
            "px-3 text-base": size === "lg"
          })}
        >
          Beta
        </span>
      </div>
    }
  >
    <Link className="flex select-none items-center justify-start gap-1" href="/">
      <Image
        alt="logo"
        className="rounded-2xl"
        draggable={false}
        height={size === "sm" ? 70 : 140}
        src="/images/logo.webp"
        width={size === "sm" ? 70 : 140}
      />
    </Link>
  </Badge>
)

export { Logotype }
