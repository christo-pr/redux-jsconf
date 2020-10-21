import {
  DECREMENT_LIFE,
  RESET_LIFES,
  INCREMENT_SCORE,
  RESET_SCORE,
} from "./types"

const initialState = {
  lifes: 3,
  score: 0,
}

export default function gameReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case DECREMENT_LIFE:
      return {
        ...state,
        lifes: state.lifes - 1,
      }
    case RESET_LIFES:
      return {
        ...state,
        lifes: 3,
      }
    case INCREMENT_SCORE:
      return {
        ...state,
        score: state.score + 1,
      }
    case RESET_SCORE:
      return {
        ...state,
        score: payload,
      }
    default:
      return state
  }
}
