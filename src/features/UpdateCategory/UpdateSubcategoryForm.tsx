"use client"

import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { Spinner } from "@nextui-org/spinner"
import { EmojiClickData } from "emoji-picker-react"
import { useFormik } from "formik"
import { SquarePen } from "lucide-react"
import dynamic from "next/dynamic"
import { memo, useState } from "react"

import { SubcategoryCard, useCategoryStore } from "@/entities/category"
import { type ICategoryItem } from "@/shared/lib"

const EmojiPicker = dynamic(() => import("../../shared/ui/emoji-picker"), {
  ssr: false,
  loading: () => (
    <div className="flex w-full justify-center">
      <Spinner
        classNames={{
          label: "text-sm font-bold",
          circle1: "border-b-primary",
          circle2: "border-b-primary-600"
        }}
        label="Just a second..."
      />
    </div>
  )
})

const UpdateCategoryItem = ({ item }: { item: ICategoryItem }) => {
  const [isEditing, setIsEditing] = useState(false)

  const { updateCategory } = useCategoryStore()

  const form = useFormik({
    initialValues: {
      emoji: item.emoji,
      name: item.name
    },
    onSubmit: (values) => {
      updateCategory({ ...item, ...values })
      setIsEditing(!isEditing)
    }
  })

  const isValuesEqual = form.values.name === item.name && form.values.emoji === item.emoji

  const onPickEmoji = (emoji: EmojiClickData) => {
    form.setValues({ ...form.values, emoji: emoji.emoji })
  }

  const onCancel = () => {
    setIsEditing(!isEditing)
    form.resetForm()
  }

  return (
    <div>
      {!isEditing ? (
        <SubcategoryCard key={item.id} item={item} onClick={() => setIsEditing(!isEditing)} />
      ) : (
        <form onSubmit={form.handleSubmit}>
          <div className="mb-2 flex w-full items-center justify-between gap-2 rounded-xl bg-white px-3 py-2">
            <div className="flex items-center gap-2">
              <p className="rounded-lg bg-primary-50 px-4 py-2">{form.values.emoji}</p>
              <Input
                classNames={{ input: "text-lg font-bold" }}
                color="primary"
                defaultValue={item.name}
                name="name"
                type="text"
                value={form.values.name}
                onChange={form.handleChange}
              />
            </div>
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
          </div>
          <EmojiPicker onClick={onPickEmoji} />
        </form>
      )}
    </div>
  )
}

export default memo(UpdateCategoryItem)
