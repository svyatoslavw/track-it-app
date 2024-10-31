import { Metadata } from "next"

import { HomePage } from "./home"
import { getHabits } from "@/shared/lib"

export const metadata: Metadata = {
  title: "Home"
}

export default async function Home() {
  const habits = await getHabits()

  return <HomePage habits={habits} />
}
