import { notFound } from "next/navigation"

import { EditHabitPage } from "./EditHabitPage"
import { getHabitById } from "@/shared/lib"

export default async function EditHabit({ params }: { params: { id: string } }) {
  const habit = await getHabitById(params.id)
  if (!habit) return notFound()

  return <EditHabitPage habit={habit} />
}
