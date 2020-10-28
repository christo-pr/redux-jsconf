import { SHOT, START_GAME } from "./types"

// ACTIONS
export const startGame = () => ({
  type: START_GAME,
})

export const shot = (duckPoints) => ({
  type: SHOT,
  payload: { points: duckPoints },
})
