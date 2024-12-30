import { Metadata } from "next"

import { AnalyticsPage } from "./AnalyticsPage"
import { SIDEBAR_TITlES } from "@/shared/config"
import { getHabits } from "@/shared/lib"

export const metadata: Metadata = {
  title: SIDEBAR_TITlES.ANALYTICS
}

export default async function PricingPage() {
  const habits = await getHabits()

  return <AnalyticsPage habits={habits} />
}
