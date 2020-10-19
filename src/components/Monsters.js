import React from "react"

import { Col, MonstersLayout, StyledMonster } from "styles/"
import { Counter } from "./Counter"

export function Monsters(props) {
  const { monsters, onClick, onTimeout } = props

  return (
    <MonstersLayout>
      <Col xs={12} lg={12}>
        <Counter duration={3} onTimeout={onTimeout} />
      </Col>
      {monsters.map((m) => (
        <Col
          key={m.id}
          xs={12}
          lg={3}
          onClick={() => {
            onClick(m.isMonster)
          }}
        >
          <StyledMonster src={m.image} alt={m.name} />
        </Col>
      ))}
    </MonstersLayout>
  )
}
