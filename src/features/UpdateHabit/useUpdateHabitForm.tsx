import { useFormik } from "formik"
import toast from "react-hot-toast"

import { RESPONSE_STATUS } from "@/shared/constans"
import { IHabit, updateHabit } from "@/shared/lib"

interface IUpdateHabitForm {
  time: string
  category: string
  day: Set<string>
  title: string
}

export const useUpdateHabitForm = (habit: IHabit) => {
  const formik = useFormik<IUpdateHabitForm>({
    initialValues: {
      category: habit.category,
      day: new Set(habit.day.split(",")),
      time: habit.time,
      title: habit.title
    },
    onSubmit: async (values) => {
      await onCreateHabit(values)
    }
  })

  const onSelectDay = (e: React.ChangeEvent<HTMLSelectElement>) => {
    formik.setValues({ ...formik.values, day: new Set(e.target.value.split(",").filter(Boolean)) })
    console.log("day", formik.values.day)
  }

  const onSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) return

    formik.setValues({ ...formik.values, category: e.target.value })
  }

  const onSelectTime = (value: string) => {
    formik.setValues({ ...formik.values, time: value })
  }

  const onCreateHabit = async (values: IUpdateHabitForm) => {
    // const toast = (await import("react-hot-toast")).default

    const res = await updateHabit(habit.id, {
      title: values.title,
      time: values.time,
      category: values.category,
      day: Array.from(values.day).join(",")
    })

    if (res.status === RESPONSE_STATUS.SUCCESS) {
      toast.success("Habit updated.")
    }
  }

  return {
    formik,
    onSelectTime,
    onSelectCategory,
    onSelectDay,
    isLoading: formik.isSubmitting
  }
}
