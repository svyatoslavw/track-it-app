"use client"

import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { useFormik } from "formik"
import { SquarePen } from "lucide-react"
import { useState } from "react"

import type { ICategory } from "../lib"
import { useCategoryStore } from "../store"

import CategoryItem from "./category-item"

interface CategoryItemProps {
  category: ICategory
}

const CategoryCard = ({ category }: CategoryItemProps) => {
  const [isEditing, setIsEditing] = useState(false)

  const { updateHeading } = useCategoryStore()

  const formik = useFormik({
    initialValues: {
      subject: category.subject
    },
    onSubmit: (values) => {
      updateHeading({ ...category, ...values })
      setIsEditing(!isEditing)
    }
  })

  return (
    <div className="mb-2 w-full" key={category.subject}>
      {!isEditing ? (
        <div className="flex items-center justify-between p-3">
          <h5 className="text-xl font-bold">{category.subject}</h5>
          <Button
            onClick={() => setIsEditing(!isEditing)}
            color="secondary"
            startContent={<SquarePen size={16} />}
          >
            Edit
          </Button>
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit} className="flex items-center justify-between p-3">
          <Input
            name="subject"
            color="primary"
            value={formik.values.subject}
            onChange={formik.handleChange}
            className="w-full max-w-52"
          />
          <Button type="submit" color="secondary" startContent={<SquarePen size={16} />}>
            Save
          </Button>
        </form>
      )}
      {category.items.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export { CategoryCard }
