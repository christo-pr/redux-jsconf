import React from "react"

import { Col, MonstersLayout, StyledMonster } from "styles/"

export function Monsters(props) {
  const { monsters, onClick } = props

  return (
    <MonstersLayout>
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
