"use client"

import { Spinner } from "@nextui-org/spinner"

import { TableDayColumn } from "./TableDayColumn"
import { TableLayoutSwitcher } from "./TableLayoutSwitcher"
import { useGroupedHabits, usePersistedState } from "@/entities/habit"
import { days } from "@/shared/constans"
import { useFakeLoading } from "@/shared/hooks"
import { type IHabit, TypeHabitStatus, cn } from "@/shared/lib"
import updateHabitStatus from "@/shared/lib/actions"
import { useCategoryStore } from "@/shared/store"

const ERROR_MESSAGE = "Something went wrong."
const COMPLETED_MESSAGE = "Habit completed."
const INCOMPLETED_MESSAGE = "Habit incompleted."

const HabitTable = ({ habits }: { habits: IHabit[] }) => {
  const { categories } = useCategoryStore()
  const [isLoading] = useFakeLoading(true, 400)
  const [isSelected, setIsSelected] = usePersistedState("habitSelected", false)
  const groupedHabits = useGroupedHabits(habits)
  const getShortDayName = (dayName: string) => dayName.substring(0, 3)

  const onCheckHabit = async (id: string, status: TypeHabitStatus) => {
    const toast = (await import("react-hot-toast")).default

    try {
      await updateHabitStatus(id, status)
      status === "complete" ? toast.success(COMPLETED_MESSAGE) : toast.error(INCOMPLETED_MESSAGE)
    } catch (error) {
      toast.error(error instanceof Error ? error.message : ERROR_MESSAGE)
    }
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <TableLayoutSwitcher isSelected={isSelected} onValueChange={setIsSelected} />
      <div className={cn("flex h-full flex-col gap-2", { "flex-row": isSelected })}>
        {!isLoading ? (
          days.map((day) => (
            <TableDayColumn
              key={day.day}
              day={day}
              categories={categories}
              habits={groupedHabits[day.day] || []}
              isSelected={isSelected}
              onButtonAction={onCheckHabit}
              getShortDayName={getShortDayName}
            />
          ))
        ) : (
          <div className="my-10 flex w-full justify-center">
            <Spinner
              classNames={{
                label: "text-sm font-bold",
                circle1: "border-b-primary",
                circle2: "border-b-primary-600"
              }}
              label="Just a second..."
            />
          </div>
        )}
      </div>
    </div>
  )
}

export { HabitTable }
