import { AnalyticsPage } from "./AnalyticsPage"
import { getHabits } from "@/shared/lib"

export default async function PricingPage() {
  const habits = await getHabits()

  return <AnalyticsPage habits={habits} />
}
