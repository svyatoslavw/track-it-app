import { UpdateHabitForm } from "@/features"
import type { HabitEntity } from "@/shared/lib"
import { PageTitle, PageWrapper } from "@/shared/ui"

const EditHabitPage = ({ habit }: { habit: HabitEntity }) => {
  return (
    <PageWrapper>
      <PageTitle>Edit Your Habit</PageTitle>
      <UpdateHabitForm habit={habit} />
    </PageWrapper>
  )
}

export { EditHabitPage }
