"use client"

import { getLocalTimeZone, startOfMonth, startOfWeek, today } from "@internationalized/date"
import { Button, ButtonGroup } from "@nextui-org/button"
import { Calendar } from "@nextui-org/calendar"
import { Radio, RadioGroup } from "@nextui-org/radio"
import { useLocale } from "@react-aria/i18n"
import React from "react"

import { type HabitEntity, cn } from "@/shared/lib"

const HabitCalendar = ({ habits }: { habits: HabitEntity[] }) => {
  let defaultDate = today(getLocalTimeZone())
  let [value, setValue] = React.useState(defaultDate)
  let { locale } = useLocale()

  let now = today(getLocalTimeZone())
  let nextWeek = startOfWeek(now.add({ weeks: 1 }), locale)
  let nextMonth = startOfMonth(now.add({ months: 1 }))

  const getHighlightedDays = () => {
    const daysSet = new Set<string>()

    habits.forEach((habit) => {
      const days = habit.day.split(",") // Преобразуем строку в массив

      days.forEach((day) => daysSet.add(day.trim())) // Добавляем уникальные дни в Set
    })

    return Array.from(daysSet)
  }

  const CustomRadio = (props: React.ComponentProps<typeof Radio>) => {
    const { children, ...otherProps } = props

    return (
      <Radio
        {...otherProps}
        classNames={{
          base: cn(
            "flex-none m-0 h-8 bg-content1 hover:bg-content2 items-center justify-between",
            "cursor-pointer rounded-full border-2 border-default-200/60",
            "data-[selected=true]:border-primary"
          ),
          label: "text-tiny text-default-500",
          labelWrapper: "px-1 m-0",
          wrapper: "hidden"
        }}
      >
        {children}
      </Radio>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <Calendar
        aria-label="Date (Presets)"
        bottomContent={
          <RadioGroup
            aria-label="Date precision"
            classNames={{
              base: "w-full pb-2",
              wrapper: "-my-2.5 py-2.5 px-3 gap-1 flex-wrap"
            }}
            defaultValue="exact_dates"
            orientation="horizontal"
          >
            <CustomRadio value="exact_dates">Exact dates</CustomRadio>
            <CustomRadio value="1_day">1 day</CustomRadio>
            <CustomRadio value="2_days">2 days</CustomRadio>
            <CustomRadio value="3_days">3 days</CustomRadio>
            <CustomRadio value="7_days">7 days</CustomRadio>
            <CustomRadio value="14_days">14 days</CustomRadio>
          </RadioGroup>
        }
        calendarWidth={350}
        classNames={{
          cellButton:
            "relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-1 after:h-1 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-primary after:rounded-full",
          headerWrapper: "bg-foreground-50",
          gridHeader: "bg-foreground-50",
          content: "w-full"
        }}
        focusedValue={value}
        nextButtonProps={{
          variant: "bordered"
        }}
        prevButtonProps={{
          variant: "bordered"
        }}
        topContent={
          <ButtonGroup
            fullWidth
            className="bg-content1 px-3 pb-2 pt-3 [&>button]:border-default-200/60 [&>button]:text-default-500"
            radius="full"
            size="sm"
            variant="bordered"
          >
            <Button onPress={() => setValue(now)}>Today</Button>
            <Button onPress={() => setValue(nextWeek)}>Next week</Button>
            <Button onPress={() => setValue(nextMonth)}>Next month</Button>
          </ButtonGroup>
        }
        value={value}
        onChange={setValue}
        onFocusChange={setValue}
      />
    </div>
  )
}

export { HabitCalendar }
