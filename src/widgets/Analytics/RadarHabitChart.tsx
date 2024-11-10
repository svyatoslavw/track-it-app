"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/shared/ui"

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

const RadarHabitChart = () => {
  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[85vh]">
      <RadarChart data={chartData}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <PolarAngleAxis dataKey="month" />
        <PolarGrid />
        <Radar dataKey="completed" fill="#7c3aed" fillOpacity={0.6} />
        <Radar dataKey="incompleted" fill="#9333ea" />
      </RadarChart>
    </ChartContainer>
  )
}

export { RadarHabitChart }
