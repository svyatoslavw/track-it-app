import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { days } from "../constans"

import { ICategory, IHabit } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function debounce<T extends (...args: any[]) => void>(func: T, ms: number) {
  let timer: NodeJS.Timeout | null = null

  return function (this: any, ...args: Parameters<T>) {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      func.apply(this, args)
    }, ms)
  }
}

export function getFormattedHabitDay(habit: IHabit) {
  const items = habit.day.split(",").map((day) => day.trim())
  const emojis = items
    .map((day) => {
      const item = days.find((d) => d.day === day)

      return item ? `${item.emoji} ${item.day}` : ""
    })
    .filter(Boolean)
    .join(", ")

  return emojis
}

export function getFormattedHabitCategory(habit: IHabit, categories: ICategory[]) {
  const categoryItem = categories.flatMap((c) => c.items).find((i) => i.name === habit.category)

  return categoryItem ? `${categoryItem.emoji} ${categoryItem.name}` : habit.category
}
