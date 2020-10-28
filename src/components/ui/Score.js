import React from "react"

import ScoreImg from "assets/img/score.png"
import { StyledScore } from "styles/"

export function Score(props) {
  const { score = 0 } = props

  return (
    <StyledScore>
      <p>{score}</p>
      <img src={ScoreImg} alt="User Score" width="80" />
    </StyledScore>
  )
}
