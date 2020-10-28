import { SHOT, START_GAME, SHOT_MISS, GAME_OVER } from "./types"

// ACTIONS
export const startGame = () => ({
  type: START_GAME,
})

export const shot = (duckPoints) => ({
  type: SHOT,
  payload: { points: duckPoints },
})

export const shotMiss = () => ({
  type: SHOT_MISS,
})

export const gameOver = () => ({
  type: GAME_OVER,
})
