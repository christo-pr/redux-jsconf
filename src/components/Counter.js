import React from "react"

import { StyledCounter } from "styles/"
import { useCounter } from "hooks/"

export function Counter(props) {
  const { duration, onTimeout } = props
  const { counter, active, initTimer, stopTimer } = useCounter(
    duration,
    onTimeout
  )

  return <StyledCounter active={active}>{counter}</StyledCounter>
}
