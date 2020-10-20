import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import gameReducer from "./reducer"

const rootReducer = combineReducers({
  game: gameReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
