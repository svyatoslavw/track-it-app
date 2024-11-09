import { Switch } from "@nextui-org/switch"
import { AlignStartHorizontalIcon, AlignStartVerticalIcon } from "lucide-react"

import { cn } from "@/shared/lib"

interface TableLayoutSwitcherProps {
  isSelected: boolean
  onValueChange: (value: boolean) => void
}

const TableLayoutSwitcher = ({ isSelected, onValueChange }: TableLayoutSwitcherProps) => {
  return (
    <Switch
      className="hidden items-center md:flex"
      classNames={{ wrapper: "bg-white", label: "text-sm font-medium" }}
      color="default"
      isSelected={isSelected}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <AlignStartVerticalIcon className={cn("p-1", className)} />
        ) : (
          <AlignStartHorizontalIcon className={cn("p-1", className)} />
        )
      }
      onValueChange={onValueChange}
    >
      {isSelected ? "Horizontal" : "Vertical"} mode
    </Switch>
  )
}

export { TableLayoutSwitcher }
