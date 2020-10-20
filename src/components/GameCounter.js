import React from "react"

import { GlobalGameCounter } from "styles/"

export function GameCounter(props) {
  const { counter } = props

  return <GlobalGameCounter>{counter}</GlobalGameCounter>
}
