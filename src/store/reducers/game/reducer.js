import { SHOT, START_GAME, SHOT_MISS, GAME_OVER } from "store/actions/"

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
    case SHOT_MISS:
      return {
        ...state,
        lifes: state.lifes - 1,
      }
    case GAME_OVER:
      return {
        ...state,
        lifes: 3,
        gameStarted: false,
      }
    default:
      return state
  }
}
