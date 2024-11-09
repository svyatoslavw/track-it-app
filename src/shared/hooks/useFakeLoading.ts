import { useState } from "react"

export function useFakeLoading(initialValue: boolean, delay = 1000) {
  const [isLoading, setIsLoading] = useState(initialValue)

  setTimeout(() => {
    setIsLoading(false)
  }, delay)

  return [isLoading, setIsLoading] as const
}
