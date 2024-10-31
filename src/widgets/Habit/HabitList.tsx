"use client"

import { Button } from "@nextui-org/button"

import { HabitCard } from "@/entities/habit"
import { days } from "@/shared/constans"
import type { IHabit } from "@/shared/lib"
import { useCategoryStore } from "@/shared/store"

const HabitList = ({ habits }: { habits: IHabit[] }) => {
  const { categories } = useCategoryStore()
  return (
    <div className="flex h-full flex-col gap-6 lg:flex-row">
      {Array.from(days).map((day) => (
        <div key={day.day} className="flex w-full flex-row lg:flex-col">
          <div className="w-28 text-sm lg:w-full">
            <h5>{`${day.emoji} ${day.day}`}</h5>
            <div className="ml-5 block h-48 w-[2px] bg-primary-600 lg:ml-0 lg:h-[2px] lg:w-full" />
          </div>
          <div className="mt-4 flex flex-col items-center gap-2">
            {habits
              .filter((habit) => habit.day.split(",").includes(day.day))
              .map((habit) => (
                <HabitCard key={habit.id} categories={categories} habit={habit} variant="vertical">
                  <div className="flex w-full flex-col gap-0.5">
                    <Button color="primary" size="sm">
                      Complete
                    </Button>
                    <Button color="secondary" size="sm">
                      Uncomplete
                    </Button>
                  </div>
                </HabitCard>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export { HabitList }
