import type { HabitEntity, TypeDay } from "@/shared/lib"

export function useGroupedHabits(habits: HabitEntity[]) {
  return habits
    .sort((a, b) => a.time.localeCompare(b.time))
    .reduce(
      (acc, habit) => {
        habit.day.split(",").forEach((d) => {
          const day = d as TypeDay
          if (!acc[day]) acc[day] = []
          acc[day].push(habit)
        })

        return acc
      },
      {} as Record<TypeDay, HabitEntity[]>
    )
}
