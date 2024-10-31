"use client"

import { UpdateCategoryHeading } from "@/features"
import { useCategoryStore } from "@/shared/store"
import { PageWrapper } from "@/shared/ui"

const CategoryPage = () => {
  const { categories } = useCategoryStore()

  return (
    <PageWrapper>
      {categories.map((category) => (
        <UpdateCategoryHeading key={category.subject} category={category} />
      ))}
    </PageWrapper>
  )
}

export { CategoryPage }
