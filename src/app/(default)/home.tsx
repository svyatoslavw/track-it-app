import { CreateHabitForm } from "@/features"
import { IHabit } from "@/shared/lib"
import { PageTitle, PageWrapper } from "@/shared/ui"
import { HabitList } from "@/widgets"

const HomePage = ({ habits }: { habits: IHabit[] }) => {
  return (
    <PageWrapper>
      <PageTitle>Home</PageTitle>
      <CreateHabitForm />
      <HabitList habits={habits} />
    </PageWrapper>
  )
}

export { HomePage }
