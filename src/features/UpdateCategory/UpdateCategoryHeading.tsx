"use client"

import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { useFormik } from "formik"
import { SquarePen } from "lucide-react"
import { useState } from "react"

import UpdateCategoryItem from "./UpdateCategoryItem"
import { ICategory } from "@/shared/lib"
import { useCategoryStore } from "@/shared/store"

const UpdateCategoryHeading = ({ category }: { category: ICategory }) => {
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
    <div key={category.subject} className="mb-2 w-full">
      {!isEditing ? (
        <div className="flex items-center justify-between p-3">
          <h5 className="text-xl font-bold">{category.subject}</h5>
          <Button
            color="secondary"
            startContent={<SquarePen size={16} />}
            onClick={() => setIsEditing(!isEditing)}
          >
            Edit
          </Button>
        </div>
      ) : (
        <form className="flex items-center justify-between p-3" onSubmit={formik.handleSubmit}>
          <Input
            className="w-full max-w-52"
            color="primary"
            name="subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
          />
          <Button color="secondary" startContent={<SquarePen size={16} />} type="submit">
            Save
          </Button>
        </form>
      )}
      {category.items.map((item) => (
        <UpdateCategoryItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export { UpdateCategoryHeading }
