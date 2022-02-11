import { createStore, combineReducers } from "redux"
import { userReducer, movieReducer } from "./reducers"
import themeReducer from "./themeChanger";

const rootReducer = combineReducers({
  userReducer,
  theme: themeReducer,
  movieReducer
})
export const store = createStore(rootReducer)
