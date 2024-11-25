import { SVGProps } from "react"

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

type TypedPick<T, K extends keyof T> = {
  [P in K]: T[P]
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

export type TAuthProvider = "github" | "google" | "spotify"
export type TAuthProvidersLoading = Record<TAuthProvider, boolean>

export type TIconSvg = React.ForwardRefExoticComponent<
  React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>
>
export type TLoginButton = {
  provider: TAuthProvider
  title: string
  isLoading: boolean
  icon: TIconSvg
}

export const enum EnumUserRoles {
  USER = "USER",
  ADMIN = "ADMIN"
}

interface CommonModel {
  id: string
  createdAt: Date
  updatedAt: Date
}

export interface UserEntity extends CommonModel {
  name: string
  email: string
  image: string
  role: EnumUserRoles
}

export interface HabitEntity extends CommonModel {
  lastCheckedAt: Date
  completedTimes: number
  incompletedTimes: number
  title: string
  day: string
  time: string
  category: string
}

export type ICreateHabit = TypedPick<HabitEntity, "title" | "day" | "time" | "category">

export type TypeDay =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"

export type HabitStatus = "complete" | "incomplete"

export interface IDay {
  emoji: string
  day: TypeDay
  color: string
}

export interface IChartHabit {
  day: TypeDay
  completed: number
  incompleted: number
}
