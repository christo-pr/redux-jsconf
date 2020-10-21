import React, { useEffect, useState, useCallback } from "react"
import { connect } from "react-redux"

import {
  nextTurn,
  gameTimeout,
  shotFail,
  shotSuccess,
  resetGame,
  startGame,
  getRandomMonsters,
} from "store/actions"

import { useBackwardsCounter } from "hooks/"
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
    characters,
    gameStarted,
    alert,
    lifes,
    score,
    getRandomMonsters,
    gameTimeout,
    nextTurn,
    shotFail,
    shotSuccess,
    resetGame,
    startGame,
  } = props
  const { counter, initCounter, stopCounter } = useBackwardsCounter(
    DEFAULT_GAME_COUNTER
  )
  const [shot, setShot] = useState(false) // Part of global state?
  const [showCounter, setShowCounter] = useState(counter > 0)

  // Fetch initial monsters
  useEffect(() => {
    async function fetchMonsters() {
      await getRandomMonsters()
    }

    fetchMonsters()
  }, [])

  // Check Lifes
  useEffect(() => {
    if (lifes - 1 < 0) {
      resetGame()
      stopCounter()
      window.alert("Game Lost")
    }
  }, [lifes])

  // Start game
  useEffect(() => {
    if (gameStarted) {
      setShot(false)
      initCounter()
    } else {
      resetGame()
      stopCounter()
    }
  }, [gameStarted])

  // Reset user choose state
  useEffect(() => {
    setShowCounter(counter > 0)
    // Only when counter has its value reset
    if (counter === DEFAULT_GAME_COUNTER) {
      setShot(false)
    }
  }, [counter])

  // Hide alert
  useEffect(() => {
    let alertTimeout
    if (alert.show) {
      alertTimeout = setTimeout(async () => {
        nextTurn() // Remove the alert

        if (lifes > 0) initCounter()

        await getRandomMonsters()
      }, 1000)
    }

    return () => clearTimeout(alertTimeout)
  }, [alert, lifes])

  const onTimeout = useCallback(() => {
    // Call timeout on redux
    gameTimeout()
    setShot(true)
  }, [lifes])

  // Handle monster click
  const onMonsterShot = (isMonster) => {
    setShot(true)

    if (isMonster) {
      shotSuccess(1) // TODO: Monster score
    } else {
      shotFail()
    }
  }

  return (
    <Scenario>
      <Alert {...alert} />
      <Stats lifes={lifes} score={score} />
      {!gameStarted && <StartGameButton onGameStart={() => startGame()} />}
      {showCounter && gameStarted && <GameCounter counter={counter} />}
      {!showCounter && (
        <>
          <RoundCounter duration={3} onTimeout={onTimeout} stopCounter={shot} />
          <Monsters monsters={characters} onClick={onMonsterShot} />
        </>
      )}
      {gameStarted && <Gun />}
    </Scenario>
  )
}

const mapStateToProps = (state) => {
  return {
    gameStarted: state.game.gameStarted,
    alert: state.game.alert,
    lifes: state.game.lifes,
    score: state.game.score,
    characters: state.characters.chars,
  }
}

const mapDispatchToProps = {
  gameTimeout,
  nextTurn,
  shotFail,
  shotSuccess,
  resetGame,
  startGame,
  getRandomMonsters,
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxMonsters)
