import React from "react"

import { Row, Col } from "styles/"
import { Score } from "./ui/Score"
import { HP } from "./ui/HP"

export function Stats(props) {
  const { lifes, score } = props

  return (
    <Row>
      <Col xs={12} lg={9}>
        <Score score={score} />
      </Col>
      <Col xs={12} lg={3}>
        <HP lifes={lifes} />
      </Col>
    </Row>
  )
}
