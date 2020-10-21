import {
  TIMEOUT,
  SHOT_FAIL,
  SHOT_SUCCESS,
  RESET_GAME,
  START_GAME,
} from "./types"

// ACTIONS
export const startGame = () => ({
  type: START_GAME,
})

export const gameTimeout = () => ({
  type: TIMEOUT,
})

export const shotFail = () => ({
  type: SHOT_FAIL,
})

export const shotSuccess = (monsterPoints) => ({
  type: SHOT_SUCCESS,
  payload: { points: monsterPoints },
})

export const resetGame = () => ({
  type: RESET_GAME,
})
