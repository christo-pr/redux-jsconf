import React from "react"

import { Row, Col, StartButton } from "styles/"

export function StartGameButton(props) {
  const { onGameStart } = props

  return (
    <Row>
      <Col xs={12}>
        <StartButton onClick={onGameStart} />
      </Col>
    </Row>
  )
}
