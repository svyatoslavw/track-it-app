import { Metadata } from "next"

import { SignInForm } from "@/features"

export const metadata: Metadata = {
  title: "Sign in"
}

export default function Auth() {
  return <SignInForm />
}
