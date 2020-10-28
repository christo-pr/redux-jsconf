import React, { useState } from "react"
import { connect } from "react-redux"

import { shot, startGame, showNewDuck } from "store/actions"

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
    startGame,
    showNewDuck,
  } = props

  const onDuckShot = (duckPoints) => {
    shot(duckPoints || 1)
    console.log("onDuckShot -> duckPoints", duckPoints)
    setTimeout(() => {
      console.log("Duck Gone")
      showNewDuck()
    }, 1000)
  }

  return (
    <Scenario>
      <Gun />
      <Stats score={score} lifes={lifes} />
      {gameStarted && showDuck && <Duck onShot={onDuckShot} {...duck} />}
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
  startGame,
  showNewDuck,
}

export default connect(mapStateToProps, mapDispatchToProps)(ReducksHunt)
