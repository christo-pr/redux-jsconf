import React from "react"

import { GameBackground, Container, Row, Col } from "styles/"
import { Counter, HP, Monsters } from "components/"

export function Board(props) {
  return (
    <GameBackground>
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <Counter />
          </Col>
          <Col xs={12} lg={6}>
            <HP />
          </Col>
        </Row>
        <Monsters />
      </Container>
    </GameBackground>
  )
}
