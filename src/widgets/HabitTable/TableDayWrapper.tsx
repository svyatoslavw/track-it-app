import { IDay, cn } from "@/shared/lib"

interface TableDayBarWrapperProps {
  day: IDay
  isSelected: boolean
  children: React.ReactNode
}

const getShortDay = (dayName: string) => dayName.substring(0, 3)

const TableDayWrapper = ({ day, isSelected, children }: TableDayBarWrapperProps) => {
  return (
    <div className={cn("flex w-full", { "flex-row": !isSelected, "flex-col": isSelected })}>
      <div className={cn("my-3 w-24 text-sm", { "my-0 w-full": isSelected })}>
        <h5 className="text-2xl font-bold lg:text-lg">{`${day.emoji} ${getShortDay(day.day)}.`}</h5>
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
        {children}
      </div>
    </div>
  )
}

export { TableDayWrapper }
