"use client"

import { TicketCheck, TicketX } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import { normalizeChartHabits } from "@/entities/habit"
import { HabitEntity } from "@/shared/lib"
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

const COMPLETE_COLOR = "#7c3aed"
const INCOMPLETE_COLOR = "#9333ea"

const RadarHabitChart = ({ habits }: { habits: HabitEntity[] }) => {
  const data = normalizeChartHabits(habits)

  const commonProps = (dataKey: "completed" | "incompleted") => ({
    dataKey,
    fill: dataKey === "completed" ? COMPLETE_COLOR : INCOMPLETE_COLOR,
    fillOpacity: dataKey === "completed" ? 0.6 : 0.2,
    dot: { r: 3, fillOpacity: 1 }
  })

  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-screen">
      <RadarChart data={data}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <PolarAngleAxis dataKey="day" />
        <PolarGrid />
        <Radar {...commonProps("completed")} />
        <Radar {...commonProps("incompleted")} />
      </RadarChart>
    </ChartContainer>
  )
}

export { RadarHabitChart }
