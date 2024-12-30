"use client"

import { SIDEBAR_TITlES } from "@/shared/config"
import { HabitEntity } from "@/shared/lib"
import { InfoMessage, PageTitle, PageWrapper } from "@/shared/ui"
import { RadarHabitChart } from "@/widgets"

const AnalyticsPage = ({ habits }: { habits: HabitEntity[] }) => {
  return (
    <PageWrapper size="full">
      <PageTitle>{SIDEBAR_TITlES.ANALYTICS}</PageTitle>
      <RadarHabitChart habits={habits} />
      <div className="text-center">
        <InfoMessage text="All-time stats for your habits." />
        <InfoMessage asterisk="double" text="Graph is visible when all the days are used." />
      </div>
    </PageWrapper>
  )
}

export { AnalyticsPage }
