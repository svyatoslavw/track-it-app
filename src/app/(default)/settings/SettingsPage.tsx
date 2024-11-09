"use client"

import { Button } from "@nextui-org/button"
import { signOut } from "next-auth/react"

import { useCategoryStore } from "@/shared/store"

const SettingsPage = () => {
  const { reset } = useCategoryStore()
  const onLogout = () => {
    signOut({ callbackUrl: "/" })
    reset()
  }

  return (
    <div>
      <Button color="danger" onClick={onLogout}>
        Sign out
      </Button>
    </div>
  )
}

export { SettingsPage }
