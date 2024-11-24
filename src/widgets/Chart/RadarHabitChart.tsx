"use client"

import { TicketCheck, TicketX } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import { normalizeChartHabits } from "@/entities/habit"
import { IHabit } from "@/shared/lib"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/shared/ui"

const chartConfig = {
  completed: {
    label: "completed",
    color: "#7c3aed",
    icon: TicketCheck
  },
  incompleted: {
    label: "incompleted",
    color: "#9333ea",
    icon: TicketX
  }
} satisfies ChartConfig

const RadarHabitChart = ({ habits }: { habits: IHabit[] }) => {
  const data = normalizeChartHabits(habits)

  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-screen">
      <RadarChart data={data}>
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
