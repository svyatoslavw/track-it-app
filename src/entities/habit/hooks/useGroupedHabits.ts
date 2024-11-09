import type { IHabit } from "@/shared/lib"

export function useGroupedHabits(habits: IHabit[]) {
  return habits.reduce(
    (acc, habit) => {
      habit.day.split(",").forEach((day) => {
        if (!acc[day]) acc[day] = []
        acc[day].push(habit)
      })

      return acc
    },
    {} as Record<string, IHabit[]>
  )
}
