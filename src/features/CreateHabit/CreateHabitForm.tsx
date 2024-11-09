import { Time } from "@internationalized/date"
import { Badge } from "@nextui-org/badge"
import { Button } from "@nextui-org/button"
import { TimeInput } from "@nextui-org/date-input"
import { Input } from "@nextui-org/input"
import { Kbd } from "@nextui-org/kbd"
import { Select, SelectItem, SelectSection } from "@nextui-org/select"
import { Clock10Icon } from "lucide-react"

import { useCreateHabitForm } from "./useCreateHabitForm"
import { categories, days } from "@/shared/constans"
import { AiLogotype, InfoMessage } from "@/shared/ui"

const CreateHabitForm = () => {
  const { isLoading, formik, onSelectCategory, onSelectDay, onSelectTime } = useCreateHabitForm()

  return (
    <form className="flex w-full flex-col gap-3" onSubmit={formik.handleSubmit}>
      <Input
        classNames={{
          input: "font-semibold",
          inputWrapper: "h-16"
        }}
        color="primary"
        defaultValue={formik.values.title}
        description={
          <div className="flex flex-wrap items-center sm:gap-1">
            <InfoMessage text={"Please specify your habit correctly. Enabled autocomplete with"} />
            <AiLogotype withTitle />.
          </div>
        }
        endContent={
          <div className="flex w-[154px] items-center justify-center md:w-28">
            <Badge
              className="w-80"
              classNames={{
                badge: "right-0 border-0 bg-transparent cursor-pointer md:hover:opacity-hover"
              }}
              content={<AiLogotype />}
            >
              <TimeInput
                aria-label="Time"
                className="w-24"
                defaultValue={new Time(11, 45)}
                isDisabled={isLoading}
                name="time"
                startContent={
                  <Clock10Icon
                    className="pointer-events-none flex-shrink-0 text-sm text-default-400"
                    size={16}
                  />
                }
                value={
                  new Time(+formik.values.time.split(":")[0], +formik.values.time.split(":")[1])
                }
                onChange={(time) => onSelectTime(`${time.hour}:${time.minute}`)}
              />
            </Badge>
          </div>
        }
        errorMessage={formik.errors.title}
        isDisabled={isLoading}
        name="title"
        placeholder="Add your new habit"
        type="text"
        value={formik.values.title}
        onChange={formik.handleChange}
      />
      <div>
        <Badge
          className="w-80"
          classNames={{
            badge: "right-0 border-0 bg-transparent cursor-pointer md:hover:opacity-hover"
          }}
          content={<AiLogotype />}
        >
          <Select
            className="w-80 font-bold"
            classNames={{ label: "font-semibold", trigger: "font-bold" }}
            color={!formik.values.day.size ? "danger" : "default"}
            isDisabled={isLoading}
            isLoading={isLoading}
            label="Select a day"
            placeholder="Please select a day"
            selectedKeys={formik.values.day}
            selectionMode="multiple"
            onChange={onSelectDay}
          >
            {days.map((day) => (
              <SelectItem key={day.day}>{`${day.emoji} ${day.day}`}</SelectItem>
            ))}
          </Select>
        </Badge>
      </div>

      <div className="flex w-full items-end justify-between">
        <Badge
          className="w-80"
          classNames={{
            badge: "right-0 border-0 bg-transparent cursor-pointer md:hover:opacity-hover"
          }}
          content={<AiLogotype />}
        >
          <Select
            className="w-52"
            classNames={{ label: "font-semibold" }}
            errorMessage={formik.errors.category}
            isDisabled={isLoading}
            isLoading={isLoading}
            items={categories}
            label="Select a category"
            placeholder="Please select a category"
            selectedKeys={[formik.values.category]}
            onChange={onSelectCategory}
          >
            {categories.map((category, idx, arr) => (
              <SelectSection
                key={category.subject}
                showDivider={idx !== arr.length - 1}
                title={category.subject}
              >
                {category.items.map((item) => (
                  <SelectItem key={item.name}>{`${item.emoji} ${item.name}`}</SelectItem>
                ))}
              </SelectSection>
            ))}
          </Select>
        </Badge>
        <div className="flex items-center">
          <p className="text-xs text-default-500">
            <span className="hidden md:inline">Press </span>
            <span className="inline md:hidden">Tap </span>
            <Button
              aria-label="Enter"
              className="cursor-pointer bg-transparent px-0"
              size="sm"
              type="submit"
            >
              <Kbd keys={["enter"]}>Enter</Kbd>
            </Button>
            <span className="hidden md:inline"> to Add Habit</span>
          </p>
        </div>
      </div>
      <div>
        <Button
          color="primary"
          isDisabled={!formik.values.title}
          isLoading={isLoading}
          type="submit"
        >
          Add Habit
        </Button>
      </div>
    </form>
  )
}

export { CreateHabitForm }
