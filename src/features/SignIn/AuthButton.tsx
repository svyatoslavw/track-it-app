"use client"

import { Button } from "@nextui-org/button"
import { Loader2Icon } from "lucide-react"

import { TIconSvg, cn } from "@/shared/lib"

interface AuthButtonProps {
  title: string
  className?: string
  icon: TIconSvg
  disabled: boolean
  loading: boolean
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>
}

const AuthButton = ({
  icon: Icon,
  loading,
  disabled,
  className,
  title,
  onClick
}: AuthButtonProps) => {
  return (
    <Button
      className={cn("gap-2 font-semibold tracking-wide", className)}
      color="secondary"
      isDisabled={loading || disabled}
      onClick={onClick}
    >
      {loading ? <Loader2Icon className="size-4 animate-spin" /> : <Icon className="size-4" />}
      <span> {title}</span>
    </Button>
  )
}

export { AuthButton }
