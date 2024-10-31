import { Metadata } from "next"

import { CategoryPage } from "./CategoryPage"

export const metadata: Metadata = {
  title: "Categories"
}

export default function Categories() {
  return <CategoryPage />
}
