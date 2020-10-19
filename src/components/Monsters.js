import React, { useEffect, useState } from "react"

import { Col, MonstersLayout, StyledMonster } from "styles/"
import { Counter } from "./Counter"

var loopInterval

export function Monsters(props) {
  const [counter, setCounter] = useState(3)

  useEffect(() => {
    loopInterval = setInterval(() => {
      setCounter(count => count - 1)
    }, 1000)

    return () => {
      clearInterval(loopInterval)
    }
  }, [])

  useEffect(() => {
    if (counter === 0) {
      clearInterval(loopInterval)
    }
  }, [counter])

  return (
    <MonstersLayout>
      {counter === 0 ? (
        <>
          <Col xs={12} lg={12}>
            <Counter duration={3} />
          </Col>
          <Col xs={12} lg={3}>
            <StyledMonster
              src="https://via.placeholder.com/300x500"
              alt="Monstruo"
            />
          </Col>
          <Col xs={12} lg={3}>
            <StyledMonster
              src="https://via.placeholder.com/300x500"
              alt="Monstruo"
            />
          </Col>
          <Col xs={12} lg={3}>
            <StyledMonster
              src="https://via.placeholder.com/300x500"
              alt="Monstruo"
            />
          </Col>
          <Col xs={12} lg={3}>
            <StyledMonster
              src="https://via.placeholder.com/300x500"
              alt="Monstruo"
            />
          </Col>
        </>
      ) : (
        <h2>{counter}</h2>
      )}
    </MonstersLayout>
  )
}
