import React, { useState } from "react"
import { connect } from "react-redux"

import { shot, startGame, gameOver, showNewDuck, shotMiss } from "store/actions"
import { Scenario, Gun, Stats, StartGameButton, Duck } from "components/"
import { useEffect } from "react"

function ReducksHunt(props) {
  const {
    gameStarted,
    lifes,
    score,
    duck,
    showDuck,
    shot,
    shotMiss,
    startGame,
    gameOver,
    showNewDuck,
  } = props

  useEffect(() => {
    console.log("ReducksHunt -> lifes", lifes)
    if (lifes === 0) {
      gameOver()
    }
  }, [lifes])

  const onDuckShot = (duckPoints) => {
    shot(duckPoints)
    setTimeout(() => {
      console.log("Duck Shot")
      showNewDuck()
    }, 1000)
  }

  const onDuckShotMissed = () => {
    shotMiss()
    setTimeout(() => {
      console.log("Duck Gone")
      showNewDuck()
    }, 1000)
  }

  return (
    <Scenario>
      <Gun />
      <Stats score={score} lifes={lifes} />
      {gameStarted && showDuck && (
        <Duck onShot={onDuckShot} onShotMiss={onDuckShotMissed} {...duck} />
      )}
      {!gameStarted && <StartGameButton onGameStart={() => startGame()} />}
    </Scenario>
  )
}

const mapStateToProps = (state) => {
  return {
    gameStarted: state.game.gameStarted,
    lifes: state.game.lifes,
    score: state.game.score,
    duck: state.ducks.duck,
    showDuck: state.ducks.showDuck,
  }
}

const mapDispatchToProps = {
  shot,
  shotMiss,
  startGame,
  gameOver,
  showNewDuck,
}

export default connect(mapStateToProps, mapDispatchToProps)(ReducksHunt)
