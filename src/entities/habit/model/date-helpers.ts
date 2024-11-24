import { days } from "@/shared/constans"

export const getDateForWeekday = (weekday: string): Date | null => {
  const daysMap = days.map((day) => day.day) as string[]
  const today = new Date()
  const currentDayIndex = today.getDay()
  const targetDayIndex = daysMap.indexOf(weekday)

  if (targetDayIndex === -1) return null

  const diff = targetDayIndex - currentDayIndex
  const targetDate = new Date(today)
  targetDate.setDate(today.getDate() + diff)

  return targetDate
}

export const getWeekdayName = (date: Date): string => {
  return date.toLocaleString("en-US", { weekday: "long" })
}
