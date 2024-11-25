"use client"

import { Button } from "@nextui-org/button"
import { useEffect, useState } from "react"

interface IBeforeInstallPWAPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
  prompt(): Promise<void>
}

interface Window {
  deferredPrompt?: IBeforeInstallPWAPromptEvent
}

const InstallPWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<IBeforeInstallPWAPromptEvent | null>(null)
  const [isInstallable, setIsInstallable] = useState(false)

  useEffect(() => {
    const onBeforeInstallPrompt = (e: IBeforeInstallPWAPromptEvent) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setIsInstallable(true)
    }

    const onAppInstalled = () => {
      setIsInstallable(false) // Hide the install button when the app is installed.
    }

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt as EventListener)
    window.addEventListener("appinstalled", onAppInstalled as EventListener)

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt as EventListener)
      window.removeEventListener("appinstalled", onAppInstalled)
    }
  }, [])

  const onInstall = async () => {
    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt()
        const choiceResult = await deferredPrompt.userChoice
        if (choiceResult.outcome === "accepted") {
          // User accepted the install prompt.
        } else {
          // User dismissed the install prompt.
        }
      } catch (err) {
        throw err
      } finally {
        setDeferredPrompt(null)
      }
    }
  }

  if (!isInstallable) {
    return null // Don't render anything if the app is not installable or already installed.
  }

  return (
    <div className="flex w-full justify-end">
      <Button color="secondary" variant="shadow" size="sm" onClick={onInstall}>
        Install
      </Button>
    </div>
  )
}

export { InstallPWA }
