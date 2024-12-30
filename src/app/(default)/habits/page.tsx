import { Metadata } from "next"

import { HabitPage } from "./HabitPage"
import { SIDEBAR_TITlES } from "@/shared/config"
import { getHabits } from "@/shared/lib"

export const metadata: Metadata = {
  title: SIDEBAR_TITlES.HABITS
}

export default async function Habits() {
  const habits = await getHabits()

  return <HabitPage habits={habits} />
}
