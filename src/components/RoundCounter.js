import React, { useEffect } from "react"

import { StyledCounter, Col } from "styles/"
import { useCounter } from "hooks/"

export function RoundCounter(props) {
  const { duration, onTimeout, stopCounter } = props
  const { counter, initTimer, stopTimer } = useCounter(duration, onTimeout)

  useEffect(() => {
    if (stopCounter) {
      stopTimer()
    } else {
      initTimer()
    }
  }, [stopCounter])

  return (
    <Col>
      <StyledCounter>
        <p>{counter}</p>
      </StyledCounter>
    </Col>
  )
}
