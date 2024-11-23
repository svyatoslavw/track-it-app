import { CalendarWithHabits } from "./CalendarTest"
import { type IHabit } from "@/shared/lib"
import { PageTitle, PageWrapper } from "@/shared/ui/wrapper"

const HabitPage = ({ habits }: { habits: IHabit[] }) => {
  return (
    <PageWrapper size="full">
      <PageTitle>Habits</PageTitle>
      {/* <HabitCalendar habits={habits} /> */}
      {/* <HabitTable habits={habits} /> */}
      <CalendarWithHabits />
    </PageWrapper>
  )
}

export { HabitPage }
