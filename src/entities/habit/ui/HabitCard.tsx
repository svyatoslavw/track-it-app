"use client"

import { animated } from "@react-spring/web"

import {
  type ICategory,
  type IHabit,
  getFormattedHabitCategory,
  getFormattedHabitDay
} from "@/shared/lib"

interface HabitItemProps {
  habit: IHabit
  style?: Record<string, unknown>
  variant?: "vertical" | "horizontal"
  children?: React.ReactNode
  categories: ICategory[]
}

const HabitCard = ({
  habit,
  children,
  categories,
  style = {},
  variant = "horizontal"
}: HabitItemProps) => {
  return (
    <>
      {variant === "horizontal" ? (
        <animated.div
          className="flex w-full items-center justify-between rounded-xl bg-white px-4 py-6 shadow"
          style={style}
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
        </animated.div>
      ) : (
        <div
          key={habit.id}
          className="flex h-full w-48 flex-1 flex-col gap-2 rounded-lg bg-gray-100 p-2 shadow-md lg:h-48 lg:w-full lg:flex-none"
        >
          <h6 className="line-clamp-3 whitespace-pre-wrap font-bold leading-5">{habit.title}</h6>
          <div className="text-xs text-primary-700">
            {getFormattedHabitCategory(habit, categories)}
          </div>
          <div className="flex-grow" />
          {children}
        </div>
      )}
    </>
  )
}

export { HabitCard }
