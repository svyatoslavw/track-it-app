"use client"

import { AnimatePresence } from "framer-motion"
import Link from "next/link"

import { useCategoryStore } from "@/entities/category"
import { HabitCard } from "@/entities/habit"
import { HabitMenu } from "@/features"
import { ROUTES } from "@/shared/config"
import type { HabitEntity } from "@/shared/lib"

const HabitList = ({ habits }: { habits: HabitEntity[] }) => {
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
        <p className="text-center font-semibold underline underline-offset-2">
          Create your first habit
        </p>
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
