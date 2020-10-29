import React from "react"

import { Scenario, Gun, Stats, StartGameButton } from "components/"

export default function ReducksHunt(props) {
  return (
    <Scenario>
      <Gun />
      <Stats lifes={3} />
      <StartGameButton onGameStart={() => {}} score={0} />
    </Scenario>
  )
}
