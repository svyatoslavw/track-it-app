import { days } from "@/shared/constans"
import type { HabitEntity, IChartHabit } from "@/shared/lib"

export const normalizeChartHabits = (data: HabitEntity[]): IChartHabit[] => {
  const modifiedHabits = data.flatMap((item) => {
    const days = item.day.split(",")
    return days.map((day) => ({
      day: day,
      completed: item.completedTimes,
      incompleted: item.incompletedTimes
    }))
  })

  const combinedHabits = days.map((day) => {
    const dayData = modifiedHabits.filter((d) => d.day === day.day)
    const completedSum = dayData.reduce((sum, d) => sum + d.completed, 0)
    const incompletedSum = dayData.reduce((sum, d) => sum + d.incompleted, 0)

    return {
      day: day.day,
      completed: completedSum,
      incompleted: incompletedSum
    }
  })

  return combinedHabits
}
