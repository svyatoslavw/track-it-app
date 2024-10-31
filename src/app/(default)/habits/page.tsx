import { HabitPage } from "./HabitPage"
import { getHabits } from "@/shared/lib"

export default async function Habits() {
  const habits = await getHabits()

  return <HabitPage habits={habits} />
}
