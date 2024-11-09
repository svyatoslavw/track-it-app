import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover"
import Image from "next/image"

import { AI_NAME } from "@/shared/config"
import { cn } from "@/shared/lib/utils"

interface AiLogotypeProps {
  withTitle?: boolean
}

const AiLogotype = ({ withTitle = false }: AiLogotypeProps) => {
  const title = (
    <span
      className={cn(
        "bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-500 bg-clip-text font-bold text-transparent"
      )}
    >
      {AI_NAME.FULL}
    </span>
  )

  return (
    <div className="flex items-center justify-center">
      {withTitle ? (
        title
      ) : (
        <Popover
          backdrop="opaque"
          classNames={{
            base: "before:bg-gradient-to-b text-md before:from-blue-400 before:via-purple-400 before:to-red-400 bg-clip-text",
            content: cn("text-center")
          }}
          radius="sm"
          size="sm"
        >
          <PopoverTrigger className="focus-visible:hidden">
            <Image
              priority
              unoptimized
              alt={AI_NAME.FULL}
              className={cn(
                "inline-block cursor-pointer select-none drop-shadow-[0_1px_2px_#a328d4] md:hover:opacity-hover"
              )}
              height={12}
              src="/images/ai-badge2.webp"
              width={12}
            />
          </PopoverTrigger>
          <PopoverContent>
            <span>{title} is experimental so double-check the info</span>
          </PopoverContent>
        </Popover>
      )}
    </div>
  )
}

export { AiLogotype }
