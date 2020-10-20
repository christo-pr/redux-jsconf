import React from "react"

import { updateGunPosition } from "utils"
import { GameBackground, Container } from "styles/"

export function Scenario(props) {
  const { children } = props

  return (
    <GameBackground onMouseMove={updateGunPosition}>
      <Container>{children}</Container>
    </GameBackground>
  )
}
