"use client"

import { useFormik } from "formik"
import { useCallback, useEffect, useState } from "react"

import { RESPONSE_STATUS } from "@/shared/constans"
import {
  createHabit,
  debounce,
  getHabitCategoryAI,
  getHabitDayAI,
  getHabitTimeAI
} from "@/shared/lib"

interface ICreateHabitForm {
  time: string
  category: string
  day: Set<string>
  title: string
}

const INITIAL_STATE: ICreateHabitForm = {
  time: "11:45",
  category: "Unknown",
  day: new Set<string>(["Sunday"]),
  title: ""
}

export const useCreateHabitForm = () => {
  const formik = useFormik<ICreateHabitForm>({
    initialValues: { ...INITIAL_STATE },
    onSubmit: async (values) => {
      await onCreateHabit(values)
    }
  })

  const [isLoading, setIsLoading] = useState(false)

  const generateOptions = async (prompt: string) => {
    setIsLoading(true)
    try {
      const [time, category, day] = await Promise.all([
        await getHabitTimeAI(prompt),
        await getHabitCategoryAI(prompt),
        await getHabitDayAI(prompt)
      ])

      formik.setValues({ title: prompt, category, time, day: new Set(day.split(",")) })
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const debouncedGenerateOptions = useCallback(debounce(generateOptions, 2000), [])

  useEffect(() => {
    if (formik.values.title) {
      debouncedGenerateOptions(formik.values.title)
    }
  }, [formik.values.title, debouncedGenerateOptions])

  const onSelectDay = (e: React.ChangeEvent<HTMLSelectElement>) => {
    formik.setValues({ ...formik.values, day: new Set(e.target.value.split(",").filter(Boolean)) })
  }

  const onSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) return

    formik.setValues({ ...formik.values, category: e.target.value })
  }

  const onSelectTime = (value: string) => {
    formik.setValues({ ...formik.values, time: value })
  }

  const onCreateHabit = async (values: ICreateHabitForm) => {
    const toast = (await import("react-hot-toast")).default

    const res = await createHabit({
      title: values.title,
      time: values.time,
      category: values.category,
      day: Array.from(values.day).join(",")
    })

    if (res.status === RESPONSE_STATUS.SUCCESS) {
      formik.resetForm()
      toast.success("Habit created.")
    }
  }

  return {
    formik,
    isLoading,
    onSelectTime,
    onSelectDay,
    onSelectCategory
  }
}
