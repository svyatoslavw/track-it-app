"use client"

import { useCategoryStore } from "@/entities/category"
import { UpdateCategoryForm } from "@/features"
import { SIDEBAR_TITlES } from "@/shared/config"
import { PageTitle, PageWrapper } from "@/shared/ui"

const CategoryPage = () => {
  const { categories } = useCategoryStore()

  return (
    <PageWrapper>
      <PageTitle>{SIDEBAR_TITlES.CATEGORIES}</PageTitle>
      {categories.map((category) => (
        <UpdateCategoryForm key={category.subject} category={category} />
      ))}
    </PageWrapper>
  )
}

export { CategoryPage }
