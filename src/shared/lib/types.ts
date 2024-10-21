import { SVGProps } from "react"

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export interface ICategoryItem {
  id: string
  emoji: string
  name: string
}

export interface ICategory {
  id: string
  subject: string
  items: ICategoryItem[]
}
