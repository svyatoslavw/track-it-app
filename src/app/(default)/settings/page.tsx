import { Metadata } from "next"

import { SettingsPage } from "./SettingsPage"
import { SIDEBAR_TITlES } from "@/shared/config"

export const metadata: Metadata = {
  title: SIDEBAR_TITlES.SETTINGS
}

export default function Settings() {
  return <SettingsPage />
}
