"use server"

import { revalidatePath } from "next/cache"
import { cache } from "react"

import { ROUTES } from "../config"
import { RESPONSE_STATUS, days } from "../constans"

import { CompletionAIModel } from "./ai"
import { prisma } from "./db"
import { HabitEntity, HabitStatus, ICategory, ICreateHabit } from "./types"
import { auth } from "@/auth"

export async function generateAIPrompt(userPrompt: string): Promise<string> {
  if (!userPrompt) {
    throw new Error("User prompt is required.")
  }

  try {
    return CompletionAIModel(userPrompt)
  } catch (err) {
    throw err
  }
}

export async function getHabitTimeAI(userPrompt: string): Promise<string> {
  const prompt =
    `${userPrompt}. Specify the time for performing this action in the format "HH:mm" (e.g., 11:45 or 04:34). ` +
    "Choose the optimal time for this action in real life. If an exact time cannot be determined, select one at your discretion. " +
    "Display only the time, with no additional text."

  return generateAIPrompt(prompt)
}

export const getCachedHabitTimeAI = cache(getHabitTimeAI)

export async function getHabitCategoryAI(
  userPrompt: string,
  habitCategories: ICategory[]
): Promise<string> {
  const categoriesStr = habitCategories
    .flatMap((subject) => subject.items.map((item) => item.name))
    .filter(Boolean)
    .join(", ")

  const prompt =
    `Given a list of categories: ${categoriesStr} - Select the most appropriate category from the list for the "${userPrompt}" prompt in word. ` +
    "Display only the category, without any additional text. Even if you cannot determine the time, then withdraw it randomly, without any additional text."

  return generateAIPrompt(prompt)
}
export const getCachedHabitCategoryAI = cache(getHabitCategoryAI)

export async function getHabitDayAI(userPrompt: string): Promise<string> {
  const daysStr = days.flatMap((day) => day.day).join(", ")

  const prompt =
    `Given a list of days: ${daysStr}. Select the best day to implement the habit: ${userPrompt} ` +
    "Print only the selected day in one word from the list. If it is not possible to choose a suitable day, select a random one from the list. Display only the day, without any additional text. No extra text."

  return generateAIPrompt(prompt)
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

export async function getHabits(email?: string) {
  const session = await auth()

  if (!session) {
    throw new Error("Session is required.")
  }

  const habits = await prisma.habit.findMany({
    where: {
      user: { email: email || session.user.email }
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
