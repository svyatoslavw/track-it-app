import { Metadata } from "next"
import { notFound } from "next/navigation"

import { EditHabitPage } from "./EditHabitPage"
import { getHabitById } from "@/shared/lib"

export const dynamic = "force-dynamic"

type Params = {
  id: string
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const data = await getHabitById(params.id)

  return {
    title: data?.title || "Edit Habit"
  }
}

export default async function EditHabit({ params }: { params: { id: string } }) {
  const habit = await getHabitById(params.id)

  if (!habit) return notFound()

  return <EditHabitPage habit={habit} />
}
