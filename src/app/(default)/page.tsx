import { HomePage } from "./home"
import { getHabits } from "@/shared/lib"

export default async function Home() {
  const habits = await getHabits()

  return <HomePage habits={habits} />
}
