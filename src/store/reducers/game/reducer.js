import {
  TIMEOUT,
  SHOT_FAIL,
  SHOT_SUCCESS,
  NEXT_TURN,
  RESET_GAME,
  START_GAME,
} from "store/actions/"

const initialState = {
  lifes: 3,
  score: 0,
  gameStarted: false,
  alert: { type: "", show: false },
}

export function gameReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case TIMEOUT:
    case SHOT_FAIL:
      return {
        ...state,
        lifes: state.lifes - 1,
        alert: { type: "error", show: true },
      }
    case SHOT_SUCCESS:
      return {
        ...state,
        score: state.score + payload.points,
        alert: { type: "success", show: true },
      }
    case NEXT_TURN:
      return {
        ...state,
        alert: { type: "", show: false },
      }
    case RESET_GAME:
      return initialState
    case START_GAME:
      return {
        ...state,
        gameStarted: true,
        alert: { type: "", show: false },
      }
    default:
      return state
  }
}
