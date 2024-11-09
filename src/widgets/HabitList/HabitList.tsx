"use client"

import { AnimatePresence } from "framer-motion"
import Link from "next/link"

import { HabitCard } from "@/entities/habit"
import { HabitMenu } from "@/features"
import { ROUTES } from "@/shared/config"
import type { IHabit } from "@/shared/lib"
import { useCategoryStore } from "@/shared/store"

const HabitList = ({ habits }: { habits: IHabit[] }) => {
  const { categories } = useCategoryStore()

  return (
    <div className="mt-10 grid gap-2">
      {habits.length ? (
        <AnimatePresence>
          {habits.map((habit) => (
            <HabitCard key={habit.id} categories={categories} habit={habit}>
              <HabitMenu habit={habit} />
            </HabitCard>
          ))}
        </AnimatePresence>
      ) : (
        <p>Create your first habit</p>
      )}
      <Link
        className="mt-2 text-center font-bold text-primary-600 underline-offset-2 hover:underline lg:text-sm"
        href={ROUTES.HABITS}
      >
        See more
      </Link>
    </div>
  )
}

export { HabitList }
