import React, { useState, useEffect, useRef } from "react"

import { StyledDuck } from "styles/"

// 770px 225px - Duck uo
// 660px 225px - Duck up wings open
// 525px 225px - Duck up wings up
// 785px 110px - Duck shot
// 675px 110px - Duck falling

const sprite = {
  down: [785, 225],
  mid: [658, 225],
  up: [531, 225],
  shot: [785, 110],
  fall: [675, 110],
}
let interval

export function Duck(props) {
  const [duckSprite, setDuckSprite] = useState(sprite.down)
  const [duckShot, setDuckShot] = useState(false)
  const [shouldAnimate, setShouldAnimate] = useState(true)

  const animate = () => {
    let s = 0
    interval = setInterval(() => {
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
    clearInterval(interval)
  }

  const onDuckShot = () => {
    setShouldAnimate(false)
    setDuckSprite(sprite.shot)
    setDuckShot(true)
    clearInterval(interval)
  }

  useEffect(() => {
    animate()

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <StyledDuck
      onClick={onDuckShot}
      onAnimationEnd={onDuckGone}
      duckSprite={duckSprite}
      duckShot={duckShot}
      shouldAnimate={shouldAnimate}
    />
  )
}
