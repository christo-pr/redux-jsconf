import { DECREMENT_LIFE, INCREMENT_SCORE } from "./actions"

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
        lifes: state.life - 1,
      }
    case INCREMENT_SCORE:
      return {
        ...state,
        score: state.score + 1,
      }
    default:
      return state
  }
}
