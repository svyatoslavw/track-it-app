"use client"

import { useTransition } from "@react-spring/web"

import { HabitCard } from "@/entities/habit"
import { CreateHabitForm, HabitMenu } from "@/features"
import { IHabit } from "@/shared/lib"
import { useCategoryStore } from "@/shared/store"
import { PageTitle, PageWrapper } from "@/shared/ui"

export interface DayWithEmoji {
  emoji: string
  day: "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday"
}

const HomePage = ({ habits }: { habits: IHabit[] }) => {
  const { categories } = useCategoryStore()
  const transitions = useTransition(habits, {
    keys: (habit) => habit.id,
    from: { opacity: 0, transform: "translateY(-10px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(10px)" },
    config: { tension: 200, friction: 20 }
  })

  return (
    <PageWrapper>
      <PageTitle>Home</PageTitle>
      <CreateHabitForm />
      <div className="mt-20 grid gap-2">
        {habits.length ? (
          transitions((style, habit) => (
            <HabitCard key={habit.id} categories={categories} habit={habit} style={style}>
              <HabitMenu habit={habit} />
            </HabitCard>
          ))
        ) : (
          <p>Create your first habit</p>
        )}
      </div>
    </PageWrapper>
  )
}

export { HomePage }
