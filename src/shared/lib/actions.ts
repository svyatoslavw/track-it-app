"use server"

import { revalidatePath } from "next/cache"
import { cache } from "react"

import { ROUTES } from "../config"
import { RESPONSE_STATUS } from "../constans"

import { auth } from "@/auth"
import { CompletionAIModel } from "./ai"
import { prisma } from "./db"
import { HabitEntity, HabitStatus, ICategory, ICreateHabit, IDay } from "./types"

const habitCategories: ICategory[] = [
  {
    id: crypto.randomUUID(),
    subject: "Health & Fitness",
    items: [
      { id: crypto.randomUUID(), emoji: "🏋️", name: "Exercise" },
      { id: crypto.randomUUID(), emoji: "🥗", name: "Healthy Eating" },
      { id: crypto.randomUUID(), emoji: "🛏️", name: "Sleep" },
      { id: crypto.randomUUID(), emoji: "💧", name: "Hydration" },
      { id: crypto.randomUUID(), emoji: "🧘‍♂️", name: "Meditation" },
      { id: crypto.randomUUID(), emoji: "🚶", name: "Daily Steps" }
    ]
  },
  {
    id: crypto.randomUUID(),
    subject: "Learning & Development",
    items: [
      { id: crypto.randomUUID(), emoji: "📚", name: "Reading" },
      { id: crypto.randomUUID(), emoji: "🎓", name: "Learning" },
      { id: crypto.randomUUID(), emoji: "💻", name: "Coding" },
      { id: crypto.randomUUID(), emoji: "📝", name: "Journaling" },
      { id: crypto.randomUUID(), emoji: "🎨", name: "Creative Work" }
    ]
  },
  {
    id: crypto.randomUUID(),
    subject: "Work & Productivity",
    items: [
      { id: crypto.randomUUID(), emoji: "💼", name: "Work Tasks" },
      { id: crypto.randomUUID(), emoji: "📆", name: "Planning" },
      { id: crypto.randomUUID(), emoji: "✅", name: "Daily Goals" },
      { id: crypto.randomUUID(), emoji: "📈", name: "Career Development" }
    ]
  },
  {
    id: crypto.randomUUID(),
    subject: "Personal Care",
    items: [
      { id: crypto.randomUUID(), emoji: "🛁", name: "Skincare" },
      { id: crypto.randomUUID(), emoji: "💇‍♂️", name: "Grooming" },
      { id: crypto.randomUUID(), emoji: "💅🏼", name: "Self-care" },
      { id: crypto.randomUUID(), emoji: "🛌", name: "Relaxation" }
    ]
  },
  {
    id: crypto.randomUUID(),
    subject: "Social & Relationships",
    items: [
      { id: crypto.randomUUID(), emoji: "👥", name: "Family Time" },
      { id: crypto.randomUUID(), emoji: "📞", name: "Stay in Touch" },
      { id: crypto.randomUUID(), emoji: "💬", name: "Social Interactions" },
      { id: crypto.randomUUID(), emoji: "🧑‍🤝‍🧑", name: "Networking" }
    ]
  },
  {
    id: crypto.randomUUID(),
    subject: "Miscellaneous",
    items: [
      { id: crypto.randomUUID(), emoji: "🛒", name: "Grocery Shopping" },
      { id: crypto.randomUUID(), emoji: "🌱", name: "Gardening" },
      { id: crypto.randomUUID(), emoji: "🎶", name: "Listening to Music" },
      { id: crypto.randomUUID(), emoji: "🎮", name: "Gaming" },
      { id: crypto.randomUUID(), emoji: "🚗", name: "Driving" }
    ]
  },
  {
    id: crypto.randomUUID(),
    subject: "General",
    items: [{ id: crypto.randomUUID(), emoji: "🤔", name: "Unknown" }]
  }
]

const days: Omit<IDay, "color">[] = [
  { emoji: "☀️", day: "Sunday" },
  { emoji: "🌞", day: "Monday" },
  { emoji: "🌕", day: "Tuesday" },
  { emoji: "🌩️", day: "Wednesday" },
  { emoji: "⚡", day: "Thursday" },
  { emoji: "🔥", day: "Friday" },
  { emoji: "🌙", day: "Saturday" }
]

export async function getHabitTimeAI(userPrompt: string): Promise<string> {
  if (!userPrompt) {
    throw new Error("User prompt is required.")
  }

  try {
    const prompt =
      `${userPrompt}. Specify the time for performing this action in the format "HH:mm" (e.g., 11:45 or 04:34). ` +
      "Choose the optimal time for this action in real life. If an exact time cannot be determined, select one at your discretion. " +
      "Display only the time, with no additional text."

    return CompletionAIModel(prompt)
  } catch (err) {
    throw err
  }
}
export const getCachedHabitTimeAI = cache(getHabitTimeAI)

export async function getHabitCategoryAI(userPrompt: string): Promise<string> {
  if (!userPrompt) {
    throw new Error("Categories or user prompt are required.")
  }

  try {
    const categoriesStr = habitCategories
      .flatMap((subject) => subject.items.map((item) => item.name))
      .filter(Boolean)
      .join(", ")

    const prompt =
      `Given a list of categories: ${categoriesStr} - Select the most appropriate category from the list for the "${userPrompt}" prompt in word. ` +
      "Display only the category, without any additional text. Even if you cannot determine the time, then withdraw it randomly, without any additional text."

    return CompletionAIModel(prompt)
  } catch (err) {
    throw err
  }
}
export const getCachedHabitCategoryAI = cache(getHabitCategoryAI)

export async function getHabitDayAI(userPrompt: string): Promise<string> {
  if (!userPrompt) {
    throw new Error("Days or user prompt are required.")
  }

  try {
    const daysStr = days.flatMap((day) => day.day).join(", ")

    const prompt =
      `Given a list of days: ${daysStr}. Select the best day to implement the habit: ${userPrompt} ` +
      "Print only the selected day in one word from the list. If it is not possible to choose a suitable day, select a random one from the list. Display only the day, without any additional text. No extra text."

    return CompletionAIModel(prompt)
  } catch (err) {
    throw err
  }
}
export const getCachedHabitDayAI = cache(getHabitDayAI)

export async function createHabit(data: ICreateHabit) {
  const session = await auth()

  if (!session) {
    throw new Error("Session is required.")
  }

  const newHabit = await prisma.habit.create({
    data: {
      title: data.title,
      time: data.time,
      category: data.category,
      day: data.day,
      user: { connect: { email: session.user.email } }
    }
  })

  revalidatePath(ROUTES.HOME)

  return { status: RESPONSE_STATUS.SUCCESS, data: newHabit }
}

export async function updateHabit(id: string, data: ICreateHabit) {
  const session = await auth()

  if (!session) {
    throw new Error("Session is required.")
  }

  const updatedHabit = await prisma.habit.update({
    where: { id, AND: { user: { email: session.user.email } } },
    data: {
      title: data.title,
      time: data.time,
      category: data.category,
      day: data.day
    }
  })

  revalidatePath(ROUTES.HOME)

  return { status: RESPONSE_STATUS.SUCCESS, data: updatedHabit }
}

export async function deleteHabit(id: string) {
  const session = await auth()

  if (!session) {
    throw new Error("Session is required.")
  }

  const deletedHabit = await prisma.habit.delete({
    where: { id }
  })

  revalidatePath(ROUTES.HOME, "page")

  return { status: RESPONSE_STATUS.SUCCESS, data: deletedHabit }
}

export async function getHabitById(id: string) {
  const session = await auth()

  if (!session) {
    throw new Error("Session is required.")
  }

  const habit = await prisma.habit.findUnique({
    where: {
      id,
      AND: { user: { email: session.user.email } }
    }
  })

  if (!habit) {
    throw new Error("Habit not found.")
  }

  return habit
}

export async function getHabits() {
  const session = await auth()

  if (!session) {
    throw new Error("Session is required.")
  }

  const habits = await prisma.habit.findMany({
    where: {
      user: { email: session.user.email }
    }
  })

  return habits
}

export async function getFewHabits() {
  const session = await auth()

  if (!session) {
    throw new Error("Session is required.")
  }

  const habits = await prisma.habit.findMany({
    where: {
      user: { email: session.user.email }
    },
    orderBy: {
      createdAt: "desc"
    },
    take: 3
  })

  return habits
}

export default async function updateHabitStatus(id: string, action: HabitStatus) {
  const session = await auth()

  if (!session) {
    throw new Error("Session is required.")
  }

  const habit = await prisma.habit.findUnique({
    where: { id }
  })

  if (!habit) {
    throw new Error("Habit not found.")
  }

  // const currentDate = new Date()

  // if (habit.lastCheckedAt < new Date(currentDate.setDate(currentDate.getDate() + 1))) {
  //   throw new Error("Habit already checked today.")
  // }

  const data: Partial<HabitEntity> = {
    completedTimes: action === "complete" ? habit.completedTimes + 1 : habit.completedTimes,
    incompletedTimes: action === "incomplete" ? habit.incompletedTimes + 1 : habit.incompletedTimes,
    lastCheckedAt: new Date()
  }

  const updatedHabit = await prisma.habit.update({ where: { id }, data })

  revalidatePath(ROUTES.HABITS)

  return { status: RESPONSE_STATUS.SUCCESS, data: updatedHabit }
}

export async function updateHabitDay(id: string, day: string) {
  const session = await auth()

  if (!session) {
    throw new Error("Session is required.")
  }

  const habit = await prisma.habit.findUnique({ where: { id } })

  if (!habit) {
    throw new Error("Habit not found.")
  }

  const updatedHabit = await prisma.habit.update({ where: { id: habit.id }, data: { day } })

  revalidatePath(ROUTES.HABITS, "page")

  return { status: RESPONSE_STATUS.SUCCESS, data: updatedHabit }
}