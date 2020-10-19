import { useState, useEffect } from "react"

// Counter timer
var timer

export function useCounter(duration, onTimeout) {
  const [counter, setCounter] = useState(0)
  const [active, setActive] = useState(true)

  const initTimer = () => {
    clearInterval(timer)

    timer = setInterval(() => {
      setCounter((counter) => counter + 1)
    }, 1000)
  }

  // Start timer
  useEffect(() => {
    initTimer()

    return () => {
      clearInterval(timer)
    }
  }, [])

  // Stop timer
  useEffect(() => {
    if (counter + 1 > duration) {
      onTimeout(null, true)
      setCounter(0)
      setActive(false)
      clearInterval(timer)
    }
  }, [counter, timer])

  return {
    counter,
    active,
    initTimer,
    stopTimer: () => clearInterval(timer),
  }
}
