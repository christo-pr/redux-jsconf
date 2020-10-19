import React from "react"

import { GameBackground, Container, Row, Col } from "styles/"
import { HP, Monsters, Gun } from "components/"

export function Board(props) {
  function handleMouseMove(e) {
    const pointer = document.getElementsByClassName("shootgun")[0]
    pointer.setAttribute("style", "left:" + e.pageX + "px;")
  }

  return (
    <GameBackground onMouseMove={ev => handleMouseMove(ev)}>
      <Container>
        <Row>
          <Col xs={12} lg={12}>
            <HP />
          </Col>
        </Row>
        <Monsters />
        <Gun />
      </Container>
    </GameBackground>
  )
}
