import React, { useEffect, useState } from "react"

import { useBackwardsCounter } from "hooks/"
import { GameBackground, GameCounter, Container, Row, Col } from "styles/"
import { HP, Monsters, Gun, Score } from "components/"

// Update Gun position
function handleMouseMove(e) {
  const pointer = document.getElementsByClassName("shootgun")[0]
  pointer.setAttribute("style", "left:" + e.pageX + "px;")
}

export function Board(props) {
  const counter = useBackwardsCounter(3)
  const [monsters, setMonsters] = useState([]) // Part of global state
  const [lifes, setLifes] = useState(3) // Part of global state
  const [score, setScore] = useState(0) // Part of global state

  // Fetch monsters
  useEffect(() => {
    async function fetchMonsters() {
      const response = await fetch("/api/monsters")
      const data = await response.json()
      console.log("fetchMonsters -> data", data)
      setMonsters(data)
    }

    fetchMonsters()
  }, [])

  useEffect(() => {
    if (lifes === 0) {
      alert("Opps you lose the game")
      setLifes(3)
    }
  }, [lifes])

  // Handle monster click
  const onMonsterClick = (isMonster) => {
    if (isMonster) {
      alert("Yei!")
    } else {
      alert("Opp!")
      setLifes((l) => l - 1)
    }
  }

  return (
    <GameBackground onMouseMove={(ev) => handleMouseMove(ev)}>
      <Container>
        <Row>
          <Col xs={12} lg={9}>
            <Score score={score} />
          </Col>
          <Col xs={12} lg={3}>
            <HP lifes={lifes} />
          </Col>
        </Row>
        {counter === 0 ? (
          <Monsters monsters={monsters} onClick={onMonsterClick} />
        ) : (
          <GameCounter>{counter}</GameCounter>
        )}
        <Gun />
      </Container>
    </GameBackground>
  )
}
