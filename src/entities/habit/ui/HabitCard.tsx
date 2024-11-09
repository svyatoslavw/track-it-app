"use client"

import { motion } from "framer-motion"

import {
  type ICategory,
  type IHabit,
  cn,
  getFormattedHabitCategory,
  getFormattedHabitDay
} from "@/shared/lib"

interface HabitItemProps {
  habit: IHabit
  variant?: "vertical" | "horizontal"
  children?: React.ReactNode
  categories: ICategory[]
  className?: string
}

const HabitCard = ({
  habit,
  children,
  categories,
  variant = "horizontal",
  className
}: HabitItemProps) => {
  return (
    <>
      {variant === "horizontal" ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className={cn(
            "flex w-full items-center justify-between rounded-xl bg-white px-4 py-6 shadow",
            className
          )}
        >
          <div className="flex w-full flex-col items-start gap-1">
            <h5 className="font-medium">{habit.title}</h5>
            <div className="flex items-center gap-4 text-sm">
              <span>🕒{habit.time}</span>
              <span>{getFormattedHabitCategory(habit, categories)}</span>
              <span>{getFormattedHabitDay(habit)}</span>
            </div>
          </div>
          {children}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10, x: 10 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -10, x: -10 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          key={habit.id}
          className={cn(
            "flex h-full w-48 flex-1 flex-col gap-2 rounded-lg bg-gray-100 p-2 shadow-md lg:h-full lg:w-48 lg:flex-none",
            className
          )}
        >
          <h6 className="line-clamp-3 whitespace-pre-wrap font-bold leading-5">{habit.title}</h6>
          <div className="text-xs text-primary-700">
            {getFormattedHabitCategory(habit, categories)}
          </div>
          <div className="flex-grow" />
          {children}
        </motion.div>
      )}
    </>
  )
}

export { HabitCard }
