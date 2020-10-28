import React, { useState, useEffect } from "react"

import { StyledDuck } from "styles/"
import { random } from "utils"

const sprite = {
  down: [785, 225],
  mid: [658, 225],
  up: [531, 225],
  shot: [785, 110],
  fall: [675, 110],
}
let animation

export function Duck(props) {
  const { onShot, points, id } = props
  const [duckPosition] = useState(
    random(0, document.documentElement.clientWidth - 150)
  )
  const [duckSprite, setDuckSprite] = useState(sprite.down)
  const [duckShot, setDuckShot] = useState(false)
  const [shouldAnimate, setShouldAnimate] = useState(true)

  const animate = () => {
    let s = 0
    animation = setInterval(() => {
      console.log("animate")
      switch (s) {
        case 0:
          setDuckSprite(sprite.mid)
          s = 1
          break
        case 1:
          setDuckSprite(sprite.up)
          s = 2
          break
        case 2:
          setDuckSprite(sprite.down)
          s = 0
          break
      }
    }, 300)
  }

  const onDuckGone = () => {
    clearInterval(animation)
  }

  const onDuckShot = () => {
    setShouldAnimate(false)
    setDuckSprite(sprite.shot)
    setDuckShot(true)
    clearInterval(animation)
    onShot(points)
  }

  useEffect(() => {
    animate()

    return () => {
      clearInterval(animation)
    }
  }, [])

  return (
    <StyledDuck
      onClick={onDuckShot}
      onAnimationEnd={onDuckGone}
      duckSprite={duckSprite}
      duckShot={duckShot}
      duckPosition={duckPosition}
      shouldAnimate={shouldAnimate}
    />
  )
}
