"use client"

import { Button } from "@nextui-org/button"
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger
} from "@nextui-org/dropdown"
import { CopyIcon, EllipsisVertical, SquarePen, Trash2Icon } from "lucide-react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

import { ROUTES } from "@/shared/config"
import { type IHabit, deleteHabit } from "@/shared/lib"
import { AnimatedIcon } from "@/shared/ui"

const DROPDOWN_KEYS = {
  COPY: "copy",
  EDIT: "edit",
  DELETE: "delete"
}

const HabitMenu = ({ habit }: { habit: IHabit }) => {
  const router = useRouter()
  const onCopy = (name: string) => {
    navigator.clipboard.writeText(name)

    toast.success("Copied to clipboard")
  }

  const onEdit = (habitId: string) => {
    router.push(`${ROUTES.EDIT_HABIT}/${habitId}`)
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
            startContent={
              <AnimatedIcon>
                <CopyIcon />
              </AnimatedIcon>
            }
          >
            <span className="font-bold">Copy</span>
          </DropdownItem>
          <DropdownItem
            key={DROPDOWN_KEYS.EDIT}
            classNames={{ title: "font-bold" }}
            description="Edit your habit details"
            startContent={
              <AnimatedIcon>
                <SquarePen />
              </AnimatedIcon>
            }
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
            startContent={
              <AnimatedIcon>
                <Trash2Icon />
              </AnimatedIcon>
            }
          >
            Delete
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  )
}

export { HabitMenu }
