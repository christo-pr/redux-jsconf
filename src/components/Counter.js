import React, { useEffect } from "react"

import { StyledCounter } from "styles/"
import { useCounter } from "hooks/"

export function Counter(props) {
  const { duration, onTimeout, stopCounter } = props
  const { counter, active, initTimer, stopTimer } = useCounter(
    duration,
    onTimeout
  )

  useEffect(() => {
    if (stopCounter) {
      stopTimer()
    } else {
      initTimer()
    }
  }, [stopCounter])

  return <StyledCounter active={active}>{counter}</StyledCounter>
}
