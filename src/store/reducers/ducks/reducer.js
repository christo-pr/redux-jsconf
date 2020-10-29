import { REMOVE_DUCK, NEW_DUCK } from "store/actions/"

const initialState = {
  showDuck: true,
  duck: { points: 1 },
}

export function ducksReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case REMOVE_DUCK:
      return {
        showDuck: false,
        duck: {},
      }
    case NEW_DUCK:
      return {
        showDuck: true,
        duck: { points: payload.points, id: payload.id },
      }
    default:
      return state
  }
}
