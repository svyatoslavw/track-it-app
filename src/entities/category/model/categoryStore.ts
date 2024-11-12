import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

import { categories } from "../../../shared/constans"
import { ICategory, ICategoryItem } from "../../../shared/lib"

type TBearStoreState = {
  categories: ICategory[]
  updateHeading: (item: ICategory) => void
  updateCategory: (item: ICategoryItem) => void
  reset: () => void
}

export const useCategoryStore = create<TBearStoreState>()(
  persist(
    (set) => ({
      categories,
      updateCategory: (item) => {
        set((state) => ({
          categories: state.categories.map((ct) => ({
            ...ct,
            items: ct.items.map((it) => (it.id === item.id ? { ...item } : it))
          }))
        }))
      },
      updateHeading: (item) => {
        set((state) => ({
          categories: state.categories.map((ct) => (ct.id === item.id ? { ...item } : ct))
        }))
      },
      reset: () => set({ categories })
    }),
    {
      name: "categories",
      version: 1,
      storage: createJSONStorage(() => localStorage)
    }
  )
)
