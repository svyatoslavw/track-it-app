import { Metadata } from "next"

import { SignIn } from "@/widgets"

export const metadata: Metadata = {
  title: "Sign in"
}

export default function Auth() {
  return <SignIn />
}
