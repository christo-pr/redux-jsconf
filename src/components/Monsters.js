import React, { useEffect, useState } from "react"

import { Col, MonstersLayout, StyledMonster } from "styles/"
import { Counter } from "./Counter"

export function Monsters(props) {
  return (
    <MonstersLayout>
      <Col xs={12} lg={12}>
        <Counter duration={3} />
      </Col>
      <Col
        xs={12}
        lg={3}
        onClick={() => {
          console.log("testing")
        }}
      >
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
