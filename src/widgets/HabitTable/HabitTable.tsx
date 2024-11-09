"use client"

import { Spinner } from "@nextui-org/spinner"

import { TableDayColumn } from "./TableDayColumn"
import { TableLayoutSwitcher } from "./TableLayoutSwitcher"
import { useGroupedHabits, usePersistedState } from "@/entities/habit"
import { days } from "@/shared/constans"
import { useFakeLoading } from "@/shared/hooks"
import { type IHabit, cn } from "@/shared/lib"
import { useCategoryStore } from "@/shared/store"

interface HabitTableProps {
  habits: IHabit[]
}

const HabitTable = ({ habits }: HabitTableProps) => {
  const { categories } = useCategoryStore()
  const [isLoading] = useFakeLoading(true, 400)
  const [isSelected, setIsSelected] = usePersistedState("habitSelected", false)
  const groupedHabits = useGroupedHabits(habits)
  const getShortDayName = (dayName: string) => dayName.substring(0, 3)

  return (
    <div className="flex w-full flex-col gap-6">
      <TableLayoutSwitcher isSelected={isSelected} onValueChange={setIsSelected} />
      <div className={cn("flex h-full flex-col gap-2", { "flex-row": isSelected })}>
        {!isLoading ? (
          days.map((day) => (
            <TableDayColumn
              key={day.day}
              categories={categories}
              day={day}
              getShortDayName={getShortDayName}
              habits={groupedHabits[day.day] || []}
              isSelected={isSelected}
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
