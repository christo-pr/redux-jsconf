import React from "react"

import HeartFull from "assets/img/heart-full.webp"
import HeartEmpty from "assets/img/heart-empty.png"
import { HPBar } from "styles/"

export function HP(props) {
  return (
    <HPBar>
      {new Array(3).fill().map((_, i) => (
        <img
          key={i}
          src={i !== 2 ? HeartFull : HeartEmpty}
          alt="Full"
          width={100}
        />
      ))}
    </HPBar>
  )
}
