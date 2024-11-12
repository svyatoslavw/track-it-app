import { Button } from "@nextui-org/button"
import { TicketCheck, TicketX } from "lucide-react"

import { TableDayWrapper } from "./TableDayWrapper"
import { HabitCard } from "@/entities/habit"
import { HabitMenu } from "@/features"
import { type ICategory, type IDay, type IHabit, TypeHabitStatus, cn } from "@/shared/lib"

interface DayColumnProps {
  day: IDay
  habits: IHabit[]
  isSelected: boolean
  categories: ICategory[]
  onButtonAction: (id: string, status: TypeHabitStatus) => void
}

const TableDayColumn = ({
  day,
  habits,
  isSelected,
  categories,
  onButtonAction
}: DayColumnProps) => (
  <TableDayWrapper day={day} isSelected={isSelected}>
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
            className="min-w- h-8 w-full p-0 text-white transition-all duration-500 ease-soft-spring data-[hover=true]:w-96 data-[hover=true]:transition-all data-[hover=true]:duration-500"
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
            className="h-8 w-full min-w-8 p-0 transition-all duration-500 ease-soft-spring data-[hover=true]:w-96 data-[hover=true]:transition-all data-[hover=true]:duration-500"
            color="danger"
            size="sm"
          >
            <TicketX />
          </Button>
          <HabitMenu habit={habit} />
        </div>
      </HabitCard>
    ))}
  </TableDayWrapper>
)

export { TableDayColumn }
