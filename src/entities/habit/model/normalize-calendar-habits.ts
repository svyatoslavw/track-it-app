import type { EventInput } from "@fullcalendar/core"

import { getDateForWeekday } from "./date-helpers"
import type { HabitEntity } from "@/shared/lib"

export const normalizeCalendarHabits = (habits: HabitEntity[]): EventInput[] => {
  return habits
    .map((habit) => {
      const habitDays = habit.day.split(",")
      const startDay = habitDays[0].trim()
      const endDay = habitDays[habitDays.length - 1].trim()

      const startDate = getDateForWeekday(startDay)
      const endDate = getDateForWeekday(endDay)

      if (!startDate || !endDate) return {}

      const [hours, minutes] = habit.time.split(":").map(Number)
      startDate.setHours(hours, minutes)
      endDate.setHours(hours, minutes)

      return {
        id: habit.id,
        title: habit.title,
        start: startDate,
        end: endDate,
        extendedProps: { habit }
      } satisfies EventInput
    })
    .filter(Boolean)
}
