import { Badge } from "@nextui-org/badge"
import Image from "next/image"
import Link from "next/link"

const Logotype = () => (
  <Badge
    classNames={{
      badge: "right-3 border-0 bg-transparent cursor-pointer md:hover:opacity-hover"
    }}
    content={
      <div className="rounded-md bg-foreground-200 p-0.5">
        <span className="rounded-md bg-primary px-1.5 text-xs font-medium text-foreground-50">
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
        height={70}
        src="/logo5.webp"
        width={70}
      />
    </Link>
  </Badge>
)

export { Logotype }
