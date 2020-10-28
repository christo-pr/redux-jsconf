import React from "react"

import { Row, Col, StartButton, StyledScore } from "styles/"

export function StartGameButton(props) {
  const { onGameStart, score } = props

  return (
    <Row align="center" justify="center">
      <Col xs={12} align="center">
        <StyledScore>Puntaje: {score}</StyledScore>
        <StartButton onClick={onGameStart} />
      </Col>
    </Row>
  )
}
