import React, { useEffect, useState } from "react"

import { useBackwardsCounter } from "hooks/"
import { fetchRandomMonsters } from "api"
import {
  Scenario,
  Monsters,
  Gun,
  Alert,
  RoundCounter,
  GameCounter,
  Stats,
  StartGameButton,
} from "components/"

export function ReduxMonsters(props) {
  const DEFAULT_GAME_COUNTER = 3
  const { counter, initCounter, stopCounter } = useBackwardsCounter(
    DEFAULT_GAME_COUNTER
  )
  const [monsters, setMonsters] = useState([]) // Part of global state
  const [lifes, setLifes] = useState(3) // Part of global state
  const [score, setScore] = useState(0) // Part of global state
  const [gameStarted, setGameStarted] = useState(false) // Part of global state?
  const [shot, setShot] = useState(false) // Part of global state?
  const [alert, setAlert] = useState({}) // Part of global state?

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
      setAlert({ type: "error", show: true })
      setLifes(3)
      setGameStarted(false)
      stopCounter()
    }
  }, [lifes])

  // Start game
  useEffect(() => {
    if (gameStarted) {
      setAlert({ show: false })
      setShot(false)
      setScore(0)
      initCounter()
    }
  }, [gameStarted])

  // Reset user choose state
  useEffect(() => {
    // Only when counter has its value reset
    if (counter === DEFAULT_GAME_COUNTER) {
      setShot(false)
    }
  }, [counter])

  // Show fail or success alert
  const showAlert = (type, onDoneNotice) => {
    setAlert({ type, show: true })
    setTimeout(() => {
      onDoneNotice()
      setAlert({ show: false })
    }, 1000)
  }

  // Handle monster click
  const onMonsterAction = async (isMonster, timeout = false) => {
    let noticeType
    setShot(true)

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

    showAlert(noticeType, async () => {
      stopCounter()

      // Reset the counter when we still have lifes
      if (lifes !== 1) initCounter()

      const randomMonsters = await fetchRandomMonsters()
      setMonsters(randomMonsters)
    })
  }

  return (
    <Scenario>
      <Alert {...alert} />
      <Stats lifes={lifes} score={score} />
      {gameStarted ? (
        <>
          {counter === 0 ? (
            <>
              <RoundCounter
                duration={3}
                onTimeout={onMonsterAction}
                stopCounter={shot}
              />
              <Monsters monsters={monsters} onClick={onMonsterAction} />
            </>
          ) : (
            <GameCounter counter={counter} />
          )}
          <Gun />
        </>
      ) : (
        <StartGameButton onGameStart={() => setGameStarted(true)} />
      )}
    </Scenario>
  )
}
