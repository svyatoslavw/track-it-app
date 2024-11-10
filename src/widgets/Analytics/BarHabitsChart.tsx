"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/shared/ui"

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

const BarHabitsChart = () => {
  return (
    <ChartContainer className="max-h-[85vh]" config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="completed" stackId="a" fill="#7c3aed" radius={[0, 0, 4, 4]} />
        <Bar dataKey="incompleted" stackId="a" fill="#9333ea" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  )
}

export { BarHabitsChart }
