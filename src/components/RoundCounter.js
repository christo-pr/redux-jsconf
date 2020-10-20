import React, { useEffect } from "react"

import { StyledCounter, Col } from "styles/"
import { useCounter } from "hooks/"

export function RoundCounter(props) {
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

  return (
    <Col>
      <StyledCounter active={active}>{counter}</StyledCounter>
    </Col>
  )
}
