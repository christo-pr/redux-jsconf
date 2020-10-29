import React from "react"

import HeartFull from "assets/img/heart-full.webp"
import HeartEmpty from "assets/img/heart-empty.png"
import { HPBar } from "styles/"

export function HP(props) {
  const { lifes = 3 } = props
  return (
    <HPBar>
      {new Array(lifes).fill().map((_, i) => (
        <img
          key={i}
          src={i + 1 <= lifes ? HeartFull : HeartEmpty}
          alt="Health"
          width={100}
        />
      ))}
    </HPBar>
  )
}
