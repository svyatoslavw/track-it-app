import { Metadata } from "next"

import { HabitPage } from "./HabitPage"
import { getHabits } from "@/shared/lib"

export const metadata: Metadata = {
  title: "Habits"
}

export default async function Habits() {
  const habits = await getHabits()

  return <HabitPage habits={habits} />
}
