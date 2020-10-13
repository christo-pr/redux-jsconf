import React from "react"

import { Col, MonstersLayout, StyledMonster } from "styles/"

export function Monsters(props) {
  return (
    <MonstersLayout>
      <Col xs={12} lg={3}>
        <StyledMonster
          src="https://via.placeholder.com/300x500"
          alt="Monstruo"
        />
      </Col>
      <Col xs={12} lg={3}>
        <StyledMonster
          src="https://via.placeholder.com/300x500"
          alt="Monstruo"
        />
      </Col>
      <Col xs={12} lg={3}>
        <StyledMonster
          src="https://via.placeholder.com/300x500"
          alt="Monstruo"
        />
      </Col>
      <Col xs={12} lg={3}>
        <StyledMonster
          src="https://via.placeholder.com/300x500"
          alt="Monstruo"
        />
      </Col>
    </MonstersLayout>
  )
}
