import React, { useEffect, useState, useCallback } from "react"
import { connect } from "react-redux"

import {
  gameTimeout,
  shotFail,
  shotSuccess,
  resetGame,
  startGame,
} from "store/actions"

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

const DEFAULT_GAME_COUNTER = 3

const ReduxMonsters = (props) => {
  const {
    gameStarted,
    lifes,
    score,
    gameTimeout,
    shotFail,
    shotSuccess,
    resetGame,
    startGame,
  } = props
  const { counter, initCounter, stopCounter } = useBackwardsCounter(
    DEFAULT_GAME_COUNTER
  )
  const [monsters, setMonsters] = useState([]) // Part of global state
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
      // setLifes(3)
      resetGame()
      stopCounter()
    }
  }, [lifes])

  // Start game
  useEffect(() => {
    if (gameStarted) {
      setAlert({ show: false })
      setShot(false)
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

  const onTimeout = useCallback(() => {
    // Call timeout on redux
    gameTimeout()
    setShot(true)

    showAlert("error", async () => {
      if (lifes === 0) return

      initCounter()

      const randomMonsters = await fetchRandomMonsters()
      setMonsters(randomMonsters)
    })
  }, [lifes])

  // Handle monster click
  const onMonsterShot = (isMonster) => {
    let noticeType
    setShot(true)

    if (isMonster) {
      // setScore((sc) => sc + 1)
      shotSuccess(1) // TODO: Monster score
      noticeType = "success"
    } else {
      // setLifes((l) => l - 1)
      shotFail()
      noticeType = "error"
    }

    showAlert(noticeType, async () => {
      if (lifes === 0) return

      initCounter()

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
                onTimeout={onTimeout}
                stopCounter={shot}
              />
              <Monsters monsters={monsters} onClick={onMonsterShot} />
            </>
          ) : (
            <GameCounter counter={counter} />
          )}
          <Gun />
        </>
      ) : (
        <StartGameButton onGameStart={() => startGame()} />
      )}
    </Scenario>
  )
}

const mapStateToProps = (state) => {
  return {
    gameStarted: state.game.gameStarted,
    lifes: state.game.lifes,
    score: state.game.score,
  }
}

const mapDispatchToProps = {
  gameTimeout,
  shotFail,
  shotSuccess,
  resetGame,
  startGame,
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxMonsters)
