import React, { useEffect, useState } from "react"

import { useBackwardsCounter } from "hooks/"
import {
  GameBackground,
  GameCounter,
  Container,
  Row,
  Col,
  StartButton,
} from "styles/"
import { HP, Monsters, Gun, Score } from "components/"

// Update Gun position
function handleMouseMove(e) {
  const pointer = document.getElementsByClassName("shootgun")[0]
  pointer.setAttribute("style", "left:" + e.pageX + "px;")
}

// Fetch 4 random monsters
async function getRandomMonsters() {
  const response = await fetch("/api/monsters")
  const data = await response.json()
  return data
}

export function Board(props) {
  const { counter, resetCounter, initCounter } = useBackwardsCounter(3)
  const [monsters, setMonsters] = useState([]) // Part of global state
  const [lifes, setLifes] = useState(3) // Part of global state
  const [score, setScore] = useState(0) // Part of global state
  const [gameStart, setGameStart] = useState(false) // Part of global state?

  // Fetch initial monsters
  useEffect(() => {
    async function fetchMonsters() {
      const randomMonsters = await getRandomMonsters()
      setMonsters(randomMonsters)
    }

    fetchMonsters()
  }, [])

  // Check Lifes
  useEffect(() => {
    if (lifes === 0) {
      alert("Opps you lose the game")
      setLifes(3)
    }
  }, [lifes])

  // Start game
  useEffect(() => {
    if (gameStart) {
      initCounter()
    }
  }, [gameStart])

  // Handle monster click
  const onMonsterAction = async (isMonster, timeout = false) => {
    const randomMonsters = await getRandomMonsters()

    // On timeout, just lose a life
    if (timeout) {
      setLifes((l) => l - 1)
    } else {
      if (isMonster) {
        setScore((sc) => sc + 1)
      } else {
        setLifes((l) => l - 1)
      }
    }

    resetCounter()
    setMonsters(randomMonsters)
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
        {gameStart ? (
          <>
            {counter === 0 ? (
              <Monsters
                monsters={monsters}
                onClick={onMonsterAction}
                onTimeout={onMonsterAction}
              />
            ) : (
              <GameCounter>{counter}</GameCounter>
            )}
            <Gun />
          </>
        ) : (
          <Row>
            <Col xs={12}>
              <StartButton />
            </Col>
          </Row>
        )}
      </Container>
    </GameBackground>
  )
}
