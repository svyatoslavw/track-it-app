import { CalendarWithHabits } from "./CalendarTest"
import { type HabitEntity } from "@/shared/lib"
import { PageTitle, PageWrapper } from "@/shared/ui/wrapper"

const HabitPage = ({ habits }: { habits: HabitEntity[] }) => {
  return (
    <PageWrapper size="full">
      <PageTitle>Habits</PageTitle>
      {/* <HabitCalendar habits={habits} /> */}
      {/* <HabitTable habits={habits} /> */}
      <CalendarWithHabits habits={habits} />
    </PageWrapper>
  )
}

export { HabitPage }
