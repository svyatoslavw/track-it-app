"use client"

import { useEffect, useState } from "react"

export function usePersistedState<T>(key: string, initialValue: T) {
  const [isHydrated, setIsHydrated] = useState(false)
  const [state, setState] = useState<T>(initialValue)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (isHydrated) {
      const storedValue = localStorage.getItem(key)
      if (storedValue) setState(JSON.parse(storedValue))
    }
  }, [isHydrated])

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(key, JSON.stringify(state))
    }
  }, [key, state, isHydrated])

  return [state, setState] as const
}
