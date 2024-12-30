import { Metadata } from "next"

import { HomePage } from "./home"
import { SIDEBAR_TITlES } from "@/shared/config"
import { getFewHabits } from "@/shared/lib"

export const metadata: Metadata = {
  title: SIDEBAR_TITlES.HOME
}

export default async function Home() {
  const habits = await getFewHabits()

  return <HomePage habits={habits} />
}
