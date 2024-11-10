import { Button } from "@nextui-org/button"
import { EllipsisVertical, TicketCheck, TicketX } from "lucide-react"

import { HabitCard } from "@/entities/habit"
import { type ICategory, type IDay, type IHabit, TypeHabitStatus, cn } from "@/shared/lib"

interface DayColumnProps {
  day: IDay
  habits: IHabit[]
  isSelected: boolean
  categories: ICategory[]
  getShortDayName: (day: string) => string
  onButtonAction: (id: string, status: TypeHabitStatus) => void
}

const TableDayColumn = ({
  day,
  habits,
  isSelected,
  categories,
  getShortDayName,
  onButtonAction
}: DayColumnProps) => (
  <div className={cn("flex w-full", { "flex-row": !isSelected, "flex-col": isSelected })}>
    <div className={cn("my-3 w-24 text-sm", { "my-0 w-full": isSelected })}>
      <h5 className="text-2xl font-bold lg:text-lg">{`${day.emoji} ${getShortDayName(day.day)}.`}</h5>
      <div
        className={cn("block rounded-lg", {
          "ml-0 h-[3px] w-full": isSelected,
          "ml-6 h-full min-h-28 w-[3px]": !isSelected
        })}
        style={{ backgroundColor: day.color }}
      />
    </div>
    <div
      className={cn(
        "mt-8 grid grow place-content-start items-center gap-5 p-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-2 xl:grid-cols-5",
        { "mt-0 grid-cols-1 pt-4 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1": isSelected }
      )}
    >
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          categories={categories}
          className={cn({ "lg:w-full": isSelected })}
          habit={habit}
          variant="vertical"
        >
          <div className="flex w-full justify-end gap-0.5">
            <Button
              onClick={() => onButtonAction(habit.id, "complete")}
              title="Complete"
              variant="shadow"
              className="h-8 w-8 min-w-8 p-0 transition-all duration-500 ease-soft-spring data-[hover=true]:w-96 data-[hover=true]:transition-all data-[hover=true]:duration-500"
              color="success"
              size="sm"
              translate="yes"
              fullWidth
            >
              <TicketCheck />
            </Button>
            <Button
              onClick={() => onButtonAction(habit.id, "incomplete")}
              title="Incomplete"
              variant="shadow"
              className="h-8 w-8 min-w-8 p-0 transition-all duration-500 ease-soft-spring data-[hover=true]:w-96 data-[hover=true]:transition-all data-[hover=true]:duration-500"
              color="warning"
              size="sm"
            >
              <TicketX />
            </Button>
            <Button isIconOnly title="More" variant="shadow" color="default" size="sm">
              <EllipsisVertical />
            </Button>
          </div>
        </HabitCard>
      ))}
    </div>
  </div>
)

export { TableDayColumn }
