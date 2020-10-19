import { useEffect, useState } from "react"

var interval

export function useBackwardsCounter(from) {
  const [counter, setCounter] = useState(from)

  const initCounter = () => {
    interval = setInterval(() => {
      setCounter((count) => count - 1)
    }, 1000)
  }

  useEffect(() => {
    initCounter()

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if (counter === 0) {
      clearInterval(interval)
    }
  }, [counter])

  return {
    counter,
    resetCounter: () => {
      setCounter(from)
      initCounter()
    },
  }
}
