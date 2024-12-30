import { CreateHabitForm } from "@/features"
import { SIDEBAR_TITlES } from "@/shared/config"
import { HabitEntity } from "@/shared/lib"
import { PageTitle, PageWrapper } from "@/shared/ui"
import { HabitList } from "@/widgets"

const HomePage = ({ habits }: { habits: HabitEntity[] }) => {
  return (
    <PageWrapper>
      <PageTitle>{SIDEBAR_TITlES.HOME}</PageTitle>
      <CreateHabitForm />
      <HabitList habits={habits} />
    </PageWrapper>
  )
}

export { HomePage }
