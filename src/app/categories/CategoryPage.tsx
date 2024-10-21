"use client"

import { useCategoryStore } from "@/shared/store"
import { CategoryCard } from "@/shared/ui/category-card"

const CategoryPage = () => {
  const { categories } = useCategoryStore()
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="inline-block w-full max-w-2xl justify-center">
        {categories.map((category) => (
          <CategoryCard key={category.subject} category={category} />
        ))}
      </div>
    </section>
  )
}

export { CategoryPage }
