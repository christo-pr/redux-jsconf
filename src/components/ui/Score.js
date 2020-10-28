import React from "react"

import { StyledScore } from "styles/"

export function Score(props) {
  const { score = 0 } = props

  return (
    <StyledScore>
      <p>{score}</p>
    </StyledScore>
  )
}
