import React, { useEffect, useState } from "react"

import { useBackwardsCounter } from "hooks/"
import { fetchRandomMonsters } from "api"
import { GameCounter, Col } from "styles/"
import {
  Scenario,
  Monsters,
  Gun,
  Alert,
  Counter,
  Stats,
  StartGameButton,
} from "components/"

export function ReduxMonsters(props) {
  const { counter, initCounter, stopCounter } = useBackwardsCounter(3)
  const [monsters, setMonsters] = useState([]) // Part of global state
  const [lifes, setLifes] = useState(3) // Part of global state
  const [score, setScore] = useState(0) // Part of global state
  const [gameStart, setGameStart] = useState(false) // Part of global state?
  const [hasChoose, setHasChoose] = useState(false) // Part of global state?
  const [notice, setNotice] = useState({}) // Part of global state?

  // Fetch initial monsters
  useEffect(() => {
    async function fetchMonsters() {
      const randomMonsters = await fetchRandomMonsters()
      setMonsters(randomMonsters)
    }

    fetchMonsters()
  }, [])

  // Check Lifes
  useEffect(() => {
    if (lifes === 0) {
      setNotice({ type: "error", show: true })
      setLifes(3)
      setGameStart(false)
      stopCounter()
    }
  }, [lifes])

  // Start game
  useEffect(() => {
    if (gameStart) {
      setNotice({ show: false })
      setHasChoose(false)
      setScore(0)
      initCounter()
    }
  }, [gameStart])

  // Reset user choose state
  useEffect(() => {
    // Only when counter has its value reset
    if (counter === 3) {
      setHasChoose(false)
    }
  }, [counter])

  // Show fail or success alert
  const showNotice = (type, onDoneNotice) => {
    setNotice({ type, show: true })
    setTimeout(() => {
      onDoneNotice()
      setNotice({ show: false })
    }, 2000)
  }

  // Handle monster click
  const onMonsterAction = async (isMonster, timeout = false) => {
    let noticeType
    setHasChoose(true)

    // On timeout, just lose a life
    if (timeout) {
      setLifes((l) => l - 1)
      noticeType = "error"
    } else {
      if (isMonster) {
        setScore((sc) => sc + 1)
        noticeType = "success"
      } else {
        setLifes((l) => l - 1)
        noticeType = "error"
      }
    }

    showNotice(noticeType, async () => {
      stopCounter()
      const randomMonsters = await fetchRandomMonsters()
      initCounter()
      setMonsters(randomMonsters)
    })
  }

  return (
    <Scenario>
      <Alert {...notice} />
      <Stats lifes={lifes} score={score} />
      {gameStart ? (
        <>
          {counter === 0 ? (
            <>
              <Col xs={12} lg={12}>
                <Counter
                  duration={3}
                  onTimeout={onMonsterAction}
                  stopCounter={hasChoose}
                />
              </Col>
              <Monsters monsters={monsters} onClick={onMonsterAction} />
            </>
          ) : (
            <GameCounter>{counter}</GameCounter>
          )}
          <Gun />
        </>
      ) : (
        <StartGameButton onGameStart={() => setGameStart(true)} />
      )}
    </Scenario>
  )
}
