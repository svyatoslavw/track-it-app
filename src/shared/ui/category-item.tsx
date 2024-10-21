"use client"

import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { Spinner } from "@nextui-org/spinner"
import type { EmojiClickData } from "emoji-picker-react"
import { useFormik } from "formik"
import { SquarePen } from "lucide-react"
import dynamic from "next/dynamic"
import { memo, useState } from "react"

import type { ICategoryItem } from "../lib"
import { useCategoryStore } from "../store"

interface CategoryItemProps {
  item: ICategoryItem
}

const CategoryItem = ({ item }: CategoryItemProps) => {
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

  const EmojiPicker = dynamic(() => import("./emoji-picker"), {
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

  return (
    <div key={item.name}>
      {!isEditing ? (
        <div className="mb-2 flex w-full items-center justify-between gap-2 rounded-xl bg-white px-3 py-2">
          <div className="flex items-center gap-3">
            <p className="rounded-lg bg-foreground-100 px-4 py-2">{item.emoji}</p>
            <p className="text-sm font-bold sm:text-lg">{item.name}</p>
          </div>
          <Button
            onClick={() => setIsEditing(!isEditing)}
            color="secondary"
            startContent={<SquarePen size={16} />}
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
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                defaultValue={item.name}
                color="primary"
                classNames={{ input: "text-lg font-bold" }}
              />
            </div>
            <Button type="submit" color="danger" startContent={<SquarePen size={16} />}>
              Save
            </Button>
          </div>
          <EmojiPicker onClick={onPickEmoji} />
        </form>
      )}
    </div>
  )
}

export default memo(CategoryItem)
