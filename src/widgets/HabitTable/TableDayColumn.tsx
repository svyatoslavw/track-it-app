import { Button } from "@nextui-org/button"
import { TicketCheck, TicketX } from "lucide-react"

import { HabitCard } from "@/entities/habit"
import { type ICategory, type IDay, type IHabit, cn } from "@/shared/lib"

interface DayColumnProps {
  day: IDay
  habits: IHabit[]
  isSelected: boolean
  categories: ICategory[]
  getShortDayName: (day: string) => string
}

const TableDayColumn = ({
  day,
  habits,
  isSelected,
  categories,
  getShortDayName
}: DayColumnProps) => (
  <div className={cn("flex w-full", { "flex-row": !isSelected, "flex-col": isSelected })}>
    <div className={cn("my-3 w-24 text-sm", { "my-0 w-full": isSelected })}>
      <h5 className="text-2xl font-bold lg:text-lg">{`${day.emoji} ${getShortDayName(day.day)}.`}</h5>
      <div
        style={{ backgroundColor: day.color }}
        className={cn("block rounded-lg", {
          "ml-0 h-[3px] w-full": isSelected,
          "ml-6 h-full min-h-28 w-[3px]": !isSelected
        })}
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
          className={cn({ "lg:w-full": isSelected })}
          key={habit.id}
          categories={categories}
          habit={habit}
          variant="vertical"
        >
          <div className={"flex w-full gap-0.5"}>
            <Button isIconOnly color="success" size="sm">
              <TicketCheck />
            </Button>
            <Button isIconOnly color="warning" size="sm">
              <TicketX />
            </Button>
          </div>
        </HabitCard>
      ))}
    </div>
  </div>
)

export { TableDayColumn }
