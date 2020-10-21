import { SET_CHARACTERS } from "store/actions"

const initialState = {
  chars: [],
}

export function charactersReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SET_CHARACTERS:
      return {
        chars: payload.characters,
      }
    default:
      return state
  }
}
