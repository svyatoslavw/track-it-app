"use server"

import { cache } from "react"

import { CompletionAIModel } from "./ai"
import { ICategory } from "./types"
import { DayWithEmoji } from "@/app/home"

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

const days: DayWithEmoji[] = [
  { emoji: "☀️", day: "Sunday" },
  { emoji: "🌞", day: "Monday" },
  { emoji: "🌕", day: "Tuesday" },
  { emoji: "🌩️", day: "Wednesday" },
  { emoji: "⚡", day: "Thursday" },
  { emoji: "🔥", day: "Friday" },
  { emoji: "🌙", day: "Saturday" }
]

export async function getAmountAI(userPrompt: string): Promise<string> {
  if (!userPrompt) {
    throw new Error("User prompt is required.")
  }

  try {
    // const prompt = `${userPrompt}. Provide a numerical estimate of the cost in ${currency}, disregarding real-time price fluctuations. Omit any decimal points, commas, or other symbols.`
    const prompt = `${userPrompt}. Specify the date in the format of hours and minutes separated by colons, for example. 11:45, 04:34 The best time to perform this action in real life is ${userPrompt}. Even if you can’t determine the time, then deduce it at your own discretion. Omit decimal points, commas, and other characters.`

    const content = await CompletionAIModel.generateContent(prompt)
    const text = content.response.text().trim()
    return text
  } catch (err) {
    throw err
  }
}
export const getCachedAmountAI = cache(getAmountAI)

export async function getCategoryItemNameAI(userPrompt: string): Promise<string> {
  if (!userPrompt) {
    throw new Error("Categories or user prompt are required.")
  }

  try {
    const categoriesStr = habitCategories
      .flatMap((subject) => subject.items.map((item) => item.name))
      .filter(Boolean)
      .join(", ")

    const prompt = `Given a list of categories: ${categoriesStr} - Select the most appropriate category from the list for the "${userPrompt}" prompt in word. Display only the category, without further ado. Even if you cannot determine the time, then withdraw it randomly.`

    const content = await CompletionAIModel.generateContent(prompt)
    const text = content.response.text().trim()
    return text
  } catch (err) {
    throw err
  }
}
export const getCachedCategoryItemAI = cache(getCategoryItemNameAI)

export async function getDayItemNameAI(userPrompt: string): Promise<string> {
  if (!userPrompt) {
    throw new Error("Days or user prompt are required.")
  }

  try {
    const daysStr = days.flatMap((day) => day.day).join(", ")

    const prompt = `Given a list of days: ${daysStr} - Select the best day to complete your habit - ${userPrompt} with one word from the list. Display only the day, without further ado. Even if you cannot determine the time, then withdraw it randomly.`

    const content = await CompletionAIModel.generateContent(prompt)
    const text = content.response.text().trim()
    return text
  } catch (err) {
    throw err
  }
}
export const getCachedDayItemNameAI = cache(getCategoryItemNameAI)
