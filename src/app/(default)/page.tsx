import { Metadata } from "next"

import { HomePage } from "./home"
import { getFewHabits } from "@/shared/lib"

export const metadata: Metadata = {
  title: "Home"
}

export default async function Home() {
  const habits = await getFewHabits()

  return <HomePage habits={habits} />
}
