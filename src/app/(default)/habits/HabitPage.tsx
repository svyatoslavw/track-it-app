import { type IHabit } from "@/shared/lib"
import { PageTitle, PageWrapper } from "@/shared/ui/wrapper"
import { HabitTable } from "@/widgets"

const HabitPage = ({ habits }: { habits: IHabit[] }) => {
  return (
    <PageWrapper size="full">
      <PageTitle>Habits</PageTitle>
      {/* <HabitCalendar habits={habits} /> */}
      <HabitTable habits={habits} />
    </PageWrapper>
  )
}

export { HabitPage }
