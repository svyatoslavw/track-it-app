import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "TrackIt",
    template: `%s - TrackIt`
  },
  description: "TrackIt is a tool for tracking your progress and achieving your goals.",
  icons: {
    icon: "/favicon.ico"
  }
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
