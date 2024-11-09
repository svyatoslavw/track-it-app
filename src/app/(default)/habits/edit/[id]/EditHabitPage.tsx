import { UpdateHabitForm } from "@/features"
import type { IHabit } from "@/shared/lib"
import { PageTitle, PageWrapper } from "@/shared/ui"

const EditHabitPage = ({ habit }: { habit: IHabit }) => {
  return (
    <PageWrapper>
      <PageTitle>Edit Your Habit</PageTitle>
      <UpdateHabitForm habit={habit} />
    </PageWrapper>
  )

  return
}

export { EditHabitPage }
