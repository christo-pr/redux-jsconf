import React from "react"

import { Scenario, Gun, Stats, StartGameButton, Duck } from "components/"

export function ReducksHunt(props) {
  return (
    <Scenario>
      <Gun />
      <Stats />
      <Duck />
      <StartGameButton />
    </Scenario>
  )
}
