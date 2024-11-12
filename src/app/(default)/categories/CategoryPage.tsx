"use client"

import { useCategoryStore } from "@/entities/category"
import { UpdateCategoryForm } from "@/features"
import { PageWrapper } from "@/shared/ui"

const CategoryPage = () => {
  const { categories } = useCategoryStore()

  return (
    <PageWrapper>
      {categories.map((category) => (
        <UpdateCategoryForm key={category.subject} category={category} />
      ))}
    </PageWrapper>
  )
}

export { CategoryPage }
