import { useEffect, useState } from "react"

var interval

export function useBackwardsCounter(from) {
  const [counter, setCounter] = useState(from)

  useEffect(() => {
    interval = setInterval(() => {
      setCounter(count => count - 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if (counter === 0) {
      clearInterval(interval)
    }
  }, [counter])

  return counter
}
