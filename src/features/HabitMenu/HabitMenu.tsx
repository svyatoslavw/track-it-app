import { Button } from "@nextui-org/button"
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger
} from "@nextui-org/dropdown"
import { CopyIcon, EllipsisVertical, SquarePen } from "lucide-react"
import toast from "react-hot-toast"

import { type IHabit, deleteHabit } from "@/shared/lib"

const DROPDOWN_KEYS = {
  COPY: "copy",
  EDIT: "edit",
  DELETE: "delete"
}

const HabitMenu = ({ habit }: { habit: IHabit }) => {
  const onCopy = (name: string) => {
    navigator.clipboard.writeText(name)

    toast.success("Copied to clipboard")
  }

  const onEdit = (habitId: string) => {
    console.log("@edit", habitId)
  }

  const onDelete = async (habitId: string) => {
    try {
      await deleteHabit(habitId)
      toast.success("Habit deleted.")
    } catch (err) {
      toast.error("Failed to delete habit.")
      throw err
    }
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly size="sm" variant="flat">
          <EllipsisVertical size={18} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        onAction={(key) => {
          if (key === DROPDOWN_KEYS.COPY) {
            onCopy(habit.title)
          }
          if (key === DROPDOWN_KEYS.EDIT) {
            onEdit(habit.id)
          }
          if (key === DROPDOWN_KEYS.DELETE) {
            onDelete(habit.id)
          }
        }}
      >
        <DropdownSection title="Actions">
          <DropdownItem
            key={DROPDOWN_KEYS.COPY}
            classNames={{ title: "font-bold" }}
            description="Copy the habit name to your clipboard"
            startContent={<CopyIcon />}
          >
            <span className="font-bold">Copy</span>
          </DropdownItem>
          <DropdownItem
            key={DROPDOWN_KEYS.EDIT}
            classNames={{ title: "font-bold" }}
            description="Edit your habit details"
            startContent={<SquarePen />}
          >
            <span className="font-bold">Edit</span>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Danger Zone">
          <DropdownItem
            key={DROPDOWN_KEYS.DELETE}
            className="text-danger"
            classNames={{ title: "font-bold" }}
            color="danger"
            description="Permanently delete your habit"
            startContent={<SquarePen />}
          >
            Delete
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  )
}

export { HabitMenu }
