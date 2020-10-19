import React from "react"

import { updateGunPosition } from "utils"
import { GameBackground } from "styles/"

export function Scenario(props) {
  const { children } = props

  return (
    <GameBackground onMouseMove={updateGunPosition}>{children}</GameBackground>
  )
}
