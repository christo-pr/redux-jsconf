import React from "react"

import { Row, Col } from "styles/"
import { HP } from "./ui/HP"

export function Stats(props) {
  const { lifes } = props

  return (
    <Row>
      <Col xs={12} lg={12}>
        <HP lifes={lifes} />
      </Col>
    </Row>
  )
}
