"use client"

import { Button } from "@nextui-org/button"
import { useEffect } from "react"

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    /* eslint-disable no-console */
    console.error(error)
  }, [error])

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-foreground-200">
      <h2 className="text-lg font-medium">Something went wrong😟</h2>
      <Button variant="shadow" color="secondary" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  )
}
