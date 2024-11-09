import { cn } from "../lib"

export const PageTitle = ({ children }: { children: React.ReactNode }) => (
  <h1 className="py-4 text-center text-2xl font-bold capitalize">{children}</h1>
)

export const PageWrapper = ({
  children,
  size = "default"
}: {
  children: React.ReactNode
  size?: "default" | "full"
}) => (
  <section className="flex flex-col items-center justify-center gap-4">
    <div
      className={cn("inline-block w-full max-w-2xl justify-center", {
        ["max-w-full"]: size === "full"
      })}
    >
      {children}
    </div>
  </section>
)
