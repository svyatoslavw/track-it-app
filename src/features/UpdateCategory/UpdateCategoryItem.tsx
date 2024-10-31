"use client"

import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { Spinner } from "@nextui-org/spinner"
import { EmojiClickData } from "emoji-picker-react"
import { useFormik } from "formik"
import { SquarePen } from "lucide-react"
import dynamic from "next/dynamic"
import { memo, useState } from "react"

import { type ICategoryItem } from "@/shared/lib"
import { useCategoryStore } from "@/shared/store"

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

  const formik = useFormik({
    initialValues: {
      emoji: item.emoji,
      name: item.name
    },
    onSubmit: (values) => {
      updateCategory({ ...item, ...values })
      setIsEditing(!isEditing)
    }
  })

  const onPickEmoji = (emoji: EmojiClickData) => {
    formik.setValues({ ...formik.values, emoji: emoji.emoji })
  }

  return (
    <div key={item.name}>
      {!isEditing ? (
        <div className="mb-2 flex w-full items-center justify-between gap-2 rounded-xl bg-white px-3 py-2">
          <div className="flex items-center gap-3">
            <p className="rounded-lg bg-foreground-100 px-4 py-2">{item.emoji}</p>
            <p className="text-sm font-bold sm:text-lg">{item.name}</p>
          </div>
          <Button
            color="secondary"
            startContent={<SquarePen size={16} />}
            onClick={() => setIsEditing(!isEditing)}
          >
            Edit
          </Button>
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-2 flex w-full items-center justify-between gap-2 rounded-xl bg-white px-3 py-2">
            <div className="flex items-center gap-2">
              <p className="rounded-lg bg-primary-50 px-4 py-2">{formik.values.emoji}</p>
              <Input
                classNames={{ input: "text-lg font-bold" }}
                color="primary"
                defaultValue={item.name}
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </div>
            <Button color="danger" startContent={<SquarePen size={16} />} type="submit">
              Save
            </Button>
          </div>
          <EmojiPicker onClick={onPickEmoji} />
        </form>
      )}
    </div>
  )
}

export default memo(UpdateCategoryItem)
