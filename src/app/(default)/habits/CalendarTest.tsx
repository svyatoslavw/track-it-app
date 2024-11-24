"use client"

import { EventContentArg, EventDropArg } from "@fullcalendar/core"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import FullCalendar from "@fullcalendar/react"
import { Button } from "@nextui-org/button"
import { TicketCheck, TicketX } from "lucide-react"
import toast from "react-hot-toast"

import { useCategoryStore } from "@/entities/category"
import { getDateForWeekday, getWeekdayName, normalizeCalendarHabits } from "@/entities/habit"
import {
  ICategory,
  IHabit,
  TypeHabitStatus,
  getFormattedHabitCategory,
  updateHabitDay
} from "@/shared/lib"
import updateHabitStatus from "@/shared/lib/actions"

// const initialHabits: IHabit[] = [
//   {
//     id: "1",
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     lastCheckedAt: new Date(),
//     completedTimes: 5,
//     incompletedTimes: 2,
//     title: "Morning Run",
//     day: "Monday,Tuesday",
//     time: "07:00",
//     category: "Daily Steps"
//   },
//   {
//     id: "2",
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     lastCheckedAt: new Date(),
//     completedTimes: 10,
//     incompletedTimes: 1,
//     title: "Read Book with Friends and Family, Play Video Games",
//     day: "Sunday",
//     time: "20:00",
//     category: "Learning"
//   }
// ]

const DAY_IN_MS = 1000 * 60 * 60 * 24
const ERROR_MESSAGE = "Something went wrong."
const COMPLETED_MESSAGE = "Habit completed."
const INCOMPLETED_MESSAGE = "Habit incompleted."

interface EvenrContentProps {
  eventInfo: EventContentArg
  categories: ICategory[]
  onCheckHabit: (id: string, status: TypeHabitStatus) => void
}

function renderEventContent({ eventInfo, categories, onCheckHabit }: EvenrContentProps) {
  const { habit } = eventInfo.event.extendedProps as { habit: IHabit }
  return (
    <div className="flex w-full flex-col space-y-1">
      {/* <span
        className={`h-3 w-3 rounded-full ${
          habit.completedTimes > habit.incompletedTimes ? "bg-green-500" : "bg-red-500"
        }`}
      /> */}
      <b className="w-fit rounded-md border border-primary bg-primary-500 pl-1 pr-2 font-medium text-white">
        🕒 {eventInfo.timeText}
      </b>
      <p className="text-wrap font-semibold text-primary-100" title={eventInfo.event.title}>
        {eventInfo.event.title}
      </p>
      <div className="mb-3 flex w-full justify-end">
        <p className="w-fit rounded-md border-2 border-primary-500 bg-primary-800 px-2 text-xs text-primary-100">
          {getFormattedHabitCategory(habit, categories)}
        </p>
      </div>
      <div className="flex w-full flex-col gap-1">
        <Button
          title="Complete"
          onClick={() => onCheckHabit(habit.id, "complete")}
          variant="shadow"
          color="secondary"
          size="sm"
          translate="yes"
        >
          <TicketCheck size={18} className="mr-1" />
          <span className="font-medium">Complete</span>
        </Button>
        <Button
          title="Incomplete"
          onClick={() => onCheckHabit(habit.id, "incomplete")}
          variant="shadow"
          color="default"
          size="sm"
          translate="yes"
        >
          <TicketX size={18} className="mr-1" />
          <span className="font-medium">Skip</span>
        </Button>
      </div>
    </div>
  )
}

const CalendarWithHabits = ({ habits: initialHabits }: { habits: IHabit[] }) => {
  const { categories } = useCategoryStore()
  const normalHabits = normalizeCalendarHabits(initialHabits)

  const onEventDrop = (info: EventDropArg) => {
    const { habit: habitProps } = info.event.extendedProps

    const habit = habitProps as IHabit
    const oldStart = info.oldEvent.start
    const newStart = info.event.start

    console.log("habit", habit)

    if (habit && oldStart && newStart) {
      const daysDiff = Math.round((newStart.getTime() - oldStart.getTime()) / DAY_IN_MS)

      const habitDays = habit.day.split(",").map((day) => day.trim())

      const updatedDays = habitDays.map((day) => {
        const originalDate = getDateForWeekday(day)
        if (!originalDate) return day

        originalDate.setDate(originalDate.getDate() + daysDiff)
        return getWeekdayName(originalDate)
      })

      console.log("updatedDays", updatedDays)

      updateHabitDay(habit.id, updatedDays.join(","))
    }
  }

  const onCheckHabit = async (id: string, status: TypeHabitStatus) => {
    // const toast = (await import("react-hot-toast")).default

    try {
      await updateHabitStatus(id, status)
      status === "complete" ? toast.success(COMPLETED_MESSAGE) : toast.error(INCOMPLETED_MESSAGE)
    } catch (error) {
      toast.error(error instanceof Error ? error.message : ERROR_MESSAGE)
    }
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridWeek"
      editable={true}
      droppable={true}
      events={normalHabits}
      eventDrop={onEventDrop}
      eventContent={(eventInfo) => renderEventContent({ eventInfo, categories, onCheckHabit })}
      eventTimeFormat={{
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        meridiem: "short"
      }}
      headerToolbar={{ left: "", center: "", right: "" }}
      titleFormat={{ year: "numeric", month: "long" }}
      dayHeaderFormat={{ weekday: "long" }}
      eventClassNames={
        "border-none p-2 text-foreground-50 w-full bg-primary rounded-md shadow-lg shadow-violet-500/80 hover:bg-primary-600"
      }
    />
  )
}

export { CalendarWithHabits }
