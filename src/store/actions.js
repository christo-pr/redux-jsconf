import {
  DECREMENT_LIFE,
  RESET_LIFES,
  INCREMENT_SCORE,
  RESET_SCORE,
} from "./types"

// ACTIONS
export const incrementScore = () => ({
  type: INCREMENT_SCORE,
})

export const resetScore = (value) => ({
  type: RESET_SCORE,
  payload: value,
})

export const resetLifes = () => ({
  type: RESET_LIFES,
})

export const decrementLife = () => ({
  type: DECREMENT_LIFE,
})
