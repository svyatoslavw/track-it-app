"use client"

import { type ChartConfig } from "@/shared/ui"
import { BarHabitsChart, RadarHabitChart } from "@/widgets"

const chartData = [
  { month: "Sunday", completed: 186, incompleted: 80 },
  { month: "Monday", completed: 305, incompleted: 200 },
  { month: "Tuesday", completed: 200, incompleted: 100 },
  { month: "Wednesday", completed: 100, incompleted: 200 },
  { month: "Thursday", completed: 200, incompleted: 100 },
  { month: "Friday", completed: 100, incompleted: 200 },
  { month: "Saturday", completed: 200, incompleted: 100 }
]
const chartConfig = {
  completed: {
    label: "completed",
    color: "#7c3aed"
  },
  incompleted: {
    label: "incompleted",
    color: "#9333ea"
  }
} satisfies ChartConfig

const AnalyticsPage = () => {
  return (
    <div className="grid min-h-full grid-cols-2 place-items-center gap-6">
      <RadarHabitChart />
      <BarHabitsChart />
    </div>
  )
}

export { AnalyticsPage }
