"use client"

import { EventContentArg, EventDropArg, EventInput } from "@fullcalendar/core"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import FullCalendar from "@fullcalendar/react"
import { useState } from "react"

import { days } from "@/shared/constans"
import { IHabit } from "@/shared/lib"

const initialHabits: IHabit[] = [
  {
    id: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastCheckedAt: new Date(),
    completedTimes: 5,
    incompletedTimes: 2,
    title: "Morning Run",
    day: "Monday,Tuesday",
    time: "07:00",
    category: "Health"
  },
  {
    id: "2",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastCheckedAt: new Date(),
    completedTimes: 10,
    incompletedTimes: 1,
    title: "Read Book",
    day: "Sunday",
    time: "20:00",
    category: "Education"
  }
]

const DAY_IN_MS = 1000 * 60 * 60 * 24

const CalendarWithHabits = () => {
  const [habits, setHabits] = useState<IHabit[]>(initialHabits)

  const getDateForWeekday = (weekday: string): Date | null => {
    const daysMap = days.map((day) => day.day) as string[]
    const today = new Date()
    const currentDayIndex = today.getDay()
    const targetDayIndex = daysMap.indexOf(weekday)

    if (targetDayIndex === -1) return null

    const diff = targetDayIndex - currentDayIndex
    const targetDate = new Date(today)
    targetDate.setDate(today.getDate() + diff)

    return targetDate
  }

  const getWeekdayName = (date: Date): string => {
    return date.toLocaleString("en-US", { weekday: "long" })
  }

  const generateEvents = () => {
    return habits
      .map((habit) => {
        const eventDays = habit.day.split(",")
        const startDay = eventDays[0]?.trim()
        const endDay = eventDays[eventDays.length - 1].trim()

        const startDate = startDay ? getDateForWeekday(startDay) : null
        const endDate = endDay ? getDateForWeekday(endDay) : null

        if (!startDate || !endDate) return []

        const [hours, minutes] = habit.time.split(":").map(Number)
        startDate.setHours(hours, minutes)
        endDate.setHours(hours, minutes)

        return {
          id: habit.id,
          title: habit.title,
          start: startDate,
          end: endDate,
          extendedProps: { habit }
        } satisfies EventInput
      })
      .filter(Boolean)
  }

  const handleEventDrop = (info: EventDropArg) => {
    const { habitProps } = info.event.extendedProps

    const habit = habitProps as IHabit
    const oldStart = info.oldEvent.start
    const newStart = info.event.start

    if (habit && oldStart && newStart) {
      const daysDiff = Math.round((newStart.getTime() - oldStart.getTime()) / DAY_IN_MS)

      const eventDays = habit.day.split(",").map((day) => day.trim())
      const updatedDays = eventDays.map((day) => {
        const originalDate = getDateForWeekday(day)
        if (!originalDate) return day

        originalDate.setDate(originalDate.getDate() + daysDiff)
        return getWeekdayName(originalDate)
      })

      setHabits((prev) =>
        prev.map((h) => (h.id === habit.id ? { ...h, day: updatedDays.join(",") } : h))
      )
    }
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridWeek"
      editable={true}
      droppable={true}
      events={generateEvents()}
      eventDrop={handleEventDrop}
      eventContent={renderEventContent}
      eventTimeFormat={{
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        meridiem: "short"
      }}
      headerToolbar={{
        left: "title",
        center: "",
        right: ""
      }}
      titleFormat={{ year: "numeric", month: "long" }}
      dayHeaderFormat={{ weekday: "long" }}
    />
  )
}

function renderEventContent(eventInfo: EventContentArg) {
  return (
    <div className="flex w-full flex-col bg-primary text-foreground-50">
      <b>{eventInfo.timeText}</b>
      <p>{eventInfo.event.title}</p>
    </div>
  )
}

export { CalendarWithHabits }
