import { SIDEBAR_TITlES } from "@/shared/config"
import { type HabitEntity } from "@/shared/lib"
import { PageTitle, PageWrapper } from "@/shared/ui/wrapper"
import { HabitCalendar } from "@/widgets"

const HabitPage = ({ habits }: { habits: HabitEntity[] }) => {
  return (
    <PageWrapper size="full">
      <PageTitle>{SIDEBAR_TITlES.HABITS}</PageTitle>
      <HabitCalendar habits={habits} />
    </PageWrapper>
  )
}

export { HabitPage }
