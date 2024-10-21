"use client"

import { Time } from "@internationalized/date"
import { Badge } from "@nextui-org/badge"
import { Button } from "@nextui-org/button"
import { TimeInput } from "@nextui-org/date-input"
import { Input } from "@nextui-org/input"
import { Kbd } from "@nextui-org/kbd"
import { Select, SelectItem, SelectSection } from "@nextui-org/select"
import { Clock10Icon } from "lucide-react"
import { useState } from "react"

import { categories } from "@/shared/constans"
import { getAmountAI, getCategoryItemNameAI, getDayItemNameAI } from "@/shared/lib/actions"
import { debounce } from "@/shared/lib/utils"
import { AiLogotype } from "@/shared/ui/ai-logotype"
import { InfoMessage } from "@/shared/ui/info-message"

export interface DayWithEmoji {
  emoji: string
  day: "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday"
}

// Массив дней недели с эмодзи
export const days: DayWithEmoji[] = [
  { emoji: "☀️", day: "Sunday" },
  { emoji: "🌞", day: "Monday" },
  { emoji: "🌕", day: "Tuesday" },
  { emoji: "🌩️", day: "Wednesday" },
  { emoji: "⚡", day: "Thursday" },
  { emoji: "🔥", day: "Friday" },
  { emoji: "🌙", day: "Saturday" }
]

const HomePage = () => {
  const [options, setOptions] = useState({
    time: "11:45",
    category: "Unknown",
    day: new Set<string>(["Sunday"])
  })

  const [isLoading, setIsLoading] = useState(false)

  const handler = async (prompt: string) => {
    if (!prompt) return

    setIsLoading(true)

    try {
      const [time, category, day] = await Promise.all([
        await getAmountAI(prompt),
        await getCategoryItemNameAI(prompt),
        await getDayItemNameAI(prompt)
      ])

      console.log("@time", time)
      console.log("@category", category)
      console.log("@day", day)

      setOptions({ time, category, day: new Set(day.split(",")) })
    } catch (error) {
      console.log("@error")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const onValueChange = debounce((value: string) => {
    if (!value) return
    handler(value)
  }, 2000)

  const onSelectDay = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptions((prev) => ({
      ...prev,
      day: new Set(e.target.value.split(",").filter(Boolean))
    }))
  }

  const onSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) return

    setOptions((prev) => ({ ...prev, category: e.target.value }))
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="inline-block w-full max-w-2xl justify-center">
        <h1>Home</h1>
        <div className="flex w-full flex-col gap-2">
          <form className="flex w-full flex-col gap-3">
            <Input
              isDisabled={isLoading}
              onChange={(e) => onValueChange(e.target.value)}
              color="primary"
              placeholder="Add your new habit"
              classNames={{
                input: "font-semibold",
                inputWrapper: "h-16"
              }}
              description={
                <div className="flex flex-wrap items-center sm:gap-1">
                  <InfoMessage
                    text={"Please specify your habit correctly. Enabled autocomplete with"}
                  />
                  <AiLogotype withTitle />.
                </div>
              }
              endContent={
                <div className="flex w-[154px] items-center justify-center md:w-28">
                  <Badge
                    content={<AiLogotype />}
                    className="w-80"
                    classNames={{
                      badge: "right-0 border-0 bg-transparent cursor-pointer md:hover:opacity-hover"
                    }}
                  >
                    <TimeInput
                      isDisabled={isLoading}
                      value={new Time(+options.time.split(":")[0], +options.time.split(":")[1])}
                      startContent={
                        <Clock10Icon
                          size={16}
                          className="pointer-events-none flex-shrink-0 text-sm text-default-400"
                        />
                      }
                      defaultValue={new Time(11, 45)}
                      className="w-24"
                    />
                  </Badge>
                </div>
              }
            />
            <div>
              <Badge
                content={<AiLogotype />}
                className="w-80"
                classNames={{
                  badge: "right-0 border-0 bg-transparent cursor-pointer md:hover:opacity-hover"
                }}
              >
                <Select
                  onChange={onSelectDay}
                  isDisabled={isLoading}
                  isLoading={isLoading}
                  color={!options.day.size ? "danger" : "default"}
                  selectedKeys={options.day}
                  label="Select a day"
                  placeholder="Please select a day"
                  className="w-80 font-bold"
                  selectionMode="multiple"
                  classNames={{ label: "font-semibold", trigger: "font-bold" }}
                >
                  {days.map((day) => (
                    <SelectItem key={day.day}>{`${day.emoji} ${day.day}`}</SelectItem>
                  ))}
                </Select>
              </Badge>
            </div>

            <div className="flex w-full items-end justify-between">
              <Badge
                content={<AiLogotype />}
                className="w-80"
                classNames={{
                  badge: "right-0 border-0 bg-transparent cursor-pointer md:hover:opacity-hover"
                }}
              >
                <Select
                  isDisabled={isLoading}
                  isLoading={isLoading}
                  items={categories}
                  onChange={onSelectCategory}
                  selectedKeys={[options.category]}
                  className="w-52"
                  label="Select a category"
                  placeholder="Please select a category"
                  classNames={{ label: "font-semibold" }}
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
                    type="submit"
                    className="cursor-pointer bg-background px-0"
                    size="sm"
                  >
                    <Kbd keys={["enter"]}>Enter</Kbd>
                  </Button>
                  <span className="hidden md:inline"> to Add Habit</span>
                </p>
              </div>
            </div>
            <div>
              <Button color="primary">Add Habit</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export { HomePage }
