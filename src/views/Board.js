import React from "react"

import { useBackwardsCounter } from "hooks/"
import { GameBackground, GameCounter, Container, Row, Col } from "styles/"
import { HP, Monsters, Gun } from "components/"

// Update Gun position
function handleMouseMove(e) {
  const pointer = document.getElementsByClassName("shootgun")[0]
  pointer.setAttribute("style", "left:" + e.pageX + "px;")
}

export function Board(props) {
  const counter = useBackwardsCounter(3)

  return (
    <GameBackground onMouseMove={ev => handleMouseMove(ev)}>
      <Container>
        <Row>
          <Col xs={12} lg={12}>
            <HP />
          </Col>
        </Row>
        {counter === 0 ? <Monsters /> : <GameCounter>{counter}</GameCounter>}
        <Gun />
      </Container>
    </GameBackground>
  )
}
