import { useEffect, useState } from "react"

var interval
const DIFFICULTY = 600

export function useBackwardsCounter(from) {
  const [counter, setCounter] = useState(from)
  const [showCounter, setShowCounter] = useState(false)

  const initCounter = () => {
    setCounter(from)
    interval = setInterval(() => {
      setCounter((count) => count - 1)
    }, DIFFICULTY)
  }

  useEffect(() => {
    setShowCounter(counter > 0)

    if (counter <= 0) {
      clearInterval(interval)
    }
  }, [counter])

  return {
    initCounter,
    counter,
    showCounter,
    stopCounter: () => {
      clearInterval(interval)
      setCounter(from)
    },
  }
}
