import { combineReducers } from "redux";

// every feature should have its own reducer here
import { reducer as landing } from "./Landing/ducks.js";

export const rootReducer = combineReducers({
  landing,
});
