import React from "react"

import { StyledCounter } from "styles/"
import { useCounter } from "hooks/"

export function Counter(props) {
  const { duration } = props
  const { counter, active } = useCounter(duration)

  return <StyledCounter active={active}>{counter}</StyledCounter>
}
