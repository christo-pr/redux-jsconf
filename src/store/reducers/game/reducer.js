import { SHOT, START_GAME } from "store/actions/"

const initialState = {
  lifes: 3,
  score: 0,
  gameStarted: false,
}

export function gameReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SHOT:
      return {
        ...state,
        score: state.score + payload.points,
      }
    case START_GAME:
      return {
        ...initialState,
        gameStarted: true,
      }
    default:
      return state
  }
}
