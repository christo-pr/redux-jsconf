import { createStore, applyMiddleware, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import { gameReducer, ducksReducer } from "./reducers"

const rootReducer = combineReducers({
  game: gameReducer,
  ducks: ducksReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
