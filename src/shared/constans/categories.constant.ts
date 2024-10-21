import { ICategory } from "../lib"

export const categories: ICategory[] = [
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
