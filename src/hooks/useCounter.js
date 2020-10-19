import { useState, useEffect } from "react"

// Counter timer
var timer

export function useCounter(duration, onTimeout) {
  const [counter, setCounter] = useState(0)
  const [active, setActive] = useState(true)

  // Start timer
  useEffect(() => {
    timer = setInterval(() => {
      setCounter((counter) => counter + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  // Stop timer
  useEffect(() => {
    if (counter > duration) {
      onTimeout(null, true)
      setCounter(0)
      setActive(false)
      clearInterval(timer)
    }
  }, [counter, timer])

  return {
    counter,
    active,
  }
}
