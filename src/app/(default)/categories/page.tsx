import { Metadata } from "next"

import { CategoryPage } from "./CategoryPage"
import { SIDEBAR_TITlES } from "@/shared/config"

export const metadata: Metadata = {
  title: SIDEBAR_TITlES.CATEGORIES
}

export default function Categories() {
  return <CategoryPage />
}
