import { type IHabit } from "@/shared/lib"
import { PageTitle, PageWrapper } from "@/shared/ui/wrapper"
import { HabitList } from "@/widgets"

const HabitPage = ({ habits }: { habits: IHabit[] }) => {
  return (
    <PageWrapper size="full">
      <PageTitle>Habits</PageTitle>
      <HabitList habits={habits} />
    </PageWrapper>
  )
}

export { HabitPage }
