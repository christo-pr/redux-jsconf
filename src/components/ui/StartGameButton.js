import React from "react"

import ScoreImg from "assets/img/score.png"
import { Row, Col, StartButton, StyledScore } from "styles/"

export function StartGameButton(props) {
  const { onGameStart, score } = props

  return (
    <Row align="center" justify="center">
      <Col xs={12} align="center">
        <StyledScore>
          <img src={ScoreImg} width={100} />
          {score}
        </StyledScore>
        <StartButton onClick={onGameStart} />
      </Col>
    </Row>
  )
}
