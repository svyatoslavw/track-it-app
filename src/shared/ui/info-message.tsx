import { cn } from "../lib/utils"

type InfoTextProps = {
  id?: string
  text: string
  asterisk?: "single" | "double" | "triple"
  isSm?: boolean
}

const InfoMessage = ({ id, text, asterisk = "single", isSm = false }: InfoTextProps) => {
  return (
    <p
      id={id}
      className={cn(
        "font-medium text-foreground/70 hover:cursor-none hover:text-foreground",
        isSm ? "text-sm" : "text-xs"
      )}
    >
      {asterisk === "triple" && " *** "}
      {asterisk === "double" && " ** "}
      {asterisk === "single" && " * "}
      {text}
    </p>
  )
}

export { InfoMessage }
