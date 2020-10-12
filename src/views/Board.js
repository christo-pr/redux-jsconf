import React from "react"

import { GameBackground, Container, Row, Col } from "styles/"
import { Counter, HP } from "components/"

export function Board(props) {
  return (
    <GameBackground>
      <Container>
        <Row>
          <Col>
            <Counter />
          </Col>
          <Col>
            <HP />
          </Col>
        </Row>
      </Container>
    </GameBackground>
  )
}
