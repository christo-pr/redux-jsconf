import React, { useEffect } from "react"
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
    userHasShot,
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

  const {
    counter,
    showCounter,
    initCounter,
    stopCounter,
  } = useBackwardsCounter(DEFAULT_GAME_COUNTER)

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
      initCounter()
    } else {
      resetGame()
      stopCounter()
    }
  }, [gameStarted])

  // Hide alert
  useEffect(() => {
    let alertTimeout
    if (alert.show) {
      alertTimeout = setTimeout(async () => {
        nextTurn() // Call next turn on redux (cleanup)

        if (lifes > 0) initCounter() // Init the counter again when enought lifes

        await getRandomMonsters() // Fetch more random characters
      }, 1000)
    }

    return () => clearTimeout(alertTimeout)
  }, [alert, lifes])

  // Handle monster click
  const onMonsterShot = (isMonster) => {
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
          <RoundCounter
            duration={3}
            onTimeout={gameTimeout}
            stopCounter={userHasShot}
          />
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
    userHasShot: state.game.userHasShot,
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
