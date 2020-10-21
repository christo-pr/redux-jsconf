import { createStore, applyMiddleware, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import { gameReducer, charactersReducer } from "./reducers"

const rootReducer = combineReducers({
  game: gameReducer,
  characters: charactersReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
