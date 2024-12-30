"use client"

import { Button } from "@nextui-org/button"
import { Select, SelectItem } from "@nextui-org/select"
import { LogOutIcon, SunIcon, UserRoundXIcon } from "lucide-react"
import { signOut } from "next-auth/react"

import { SettingsBlock } from "./SettingsBlock"
import { SettingsSection } from "./SettingsSection"
import { useCategoryStore } from "@/entities/category"
import { SIDEBAR_TITlES } from "@/shared/config"
import { PageTitle, PageWrapper } from "@/shared/ui"

const SettingsPage = () => {
  const { reset } = useCategoryStore()
  const onLogout = () => {
    signOut({ callbackUrl: "/" })
    reset()
  }

  return (
    <PageWrapper>
      <PageTitle>{SIDEBAR_TITlES.SETTINGS}</PageTitle>
      <div className="flex flex-1 flex-col items-center overflow-y-auto overflow-x-hidden">
        <SettingsBlock description="Configure your general preferences." heading="General">
          <SettingsSection
            description="Select your favorite theme to give the app a new look that matches your style."
            heading="Theme"
          >
            <Select
              size="sm"
              color="primary"
              className="max-w-xs"
              defaultSelectedKeys={["system"]}
              label="Theme"
              placeholder="Select theme"
              description="Select your favorite theme to give the app a new look that matches your style."
              startContent={<SunIcon size={16} />}
            >
              <SelectItem key="system">System</SelectItem>
              <SelectItem key="light">Light</SelectItem>
              <SelectItem key="dark">Dark</SelectItem>
            </Select>
          </SettingsSection>
        </SettingsBlock>
        <SettingsBlock description="Change your account preferences." heading="Account">
          <SettingsSection
            description="Signing out of your account will end your current session. You will need to sign in again or switch accounts."
            heading="Exit account"
          >
            <Button className="w-full" startContent={<LogOutIcon size={16} />} onClick={onLogout}>
              Sign out
            </Button>
          </SettingsSection>
          <SettingsSection
            description="Deleting your account will permanently remove your profile and all of your data from our servers."
            heading="Delete account"
          >
            <Button
              className="w-full"
              startContent={<UserRoundXIcon size={16} />}
              color="danger"
              onClick={onLogout}
            >
              Delete account
            </Button>
          </SettingsSection>
        </SettingsBlock>
      </div>
    </PageWrapper>
  )
}

export { SettingsPage }
