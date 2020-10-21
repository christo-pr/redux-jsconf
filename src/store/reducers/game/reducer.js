import {
  TIMEOUT,
  SHOT_FAIL,
  SHOT_SUCCESS,
  RESET_GAME,
  START_GAME,
} from "../../actions/"

const initialState = {
  lifes: 3,
  score: 0,
  gameStarted: false,
}

export function gameReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case TIMEOUT:
    case SHOT_FAIL:
      return {
        ...state,
        lifes: state.lifes - 1,
      }
    case SHOT_SUCCESS:
      return {
        ...state,
        score: state.score + payload.points,
      }
    case RESET_GAME:
      return initialState
    case START_GAME:
      return {
        ...state,
        gameStarted: true,
      }
    default:
      return state
  }
}
