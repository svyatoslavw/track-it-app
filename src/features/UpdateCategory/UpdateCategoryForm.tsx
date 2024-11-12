"use client"

import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { useFormik } from "formik"
import { SquarePen } from "lucide-react"
import { useState } from "react"

import UpdateCategoryItem from "./UpdateSubcategoryForm"
import { CategoryHeadingCard, useCategoryStore } from "@/entities/category"
import { ICategory } from "@/shared/lib"

const UpdateCategoryForm = ({ category }: { category: ICategory }) => {
  const [isEditing, setIsEditing] = useState(false)

  const { updateHeading } = useCategoryStore()

  const form = useFormik({
    initialValues: {
      subject: category.subject
    },
    onSubmit: (values) => {
      updateHeading({ ...category, ...values })
      setIsEditing(!isEditing)
    }
  })

  const isValuesEqual = form.values.subject === category.subject

  const onCancel = () => {
    setIsEditing(!isEditing)
    form.resetForm()
  }

  return (
    <div className="mb-2 w-full">
      {!isEditing ? (
        <CategoryHeadingCard category={category} onClick={() => setIsEditing(!isEditing)} />
      ) : (
        <form className="flex items-center justify-between p-3" onSubmit={form.handleSubmit}>
          <Input
            className="w-full max-w-52"
            color="primary"
            name="subject"
            value={form.values.subject}
            onChange={form.handleChange}
          />
          {isValuesEqual ? (
            <Button
              color="danger"
              startContent={<SquarePen size={16} />}
              type="button"
              onClick={onCancel}
            >
              Cancel
            </Button>
          ) : (
            <Button color="primary" startContent={<SquarePen size={16} />} type="submit">
              Save
            </Button>
          )}
        </form>
      )}
      {category.items.map((item) => (
        <UpdateCategoryItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export { UpdateCategoryForm }
