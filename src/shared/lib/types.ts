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

export interface IUser extends CommonModel {
  name: string
  email: string
  image: string
  role: EnumUserRoles
}

export interface IHabit extends CommonModel {
  lastCheckedAt: Date
  completedTimes: number
  incompletedTimes: number
  title: string
  day: string
  time: string
  category: string
}

export interface ICreateHabit {
  title: string
  day: string
  time: string
  category: string
}

export type TypeDay =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"

export type TypeHabitStatus = "complete" | "incomplete"

export interface IDay {
  emoji: string
  day: TypeDay
  color: string
}
