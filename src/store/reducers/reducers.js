//Redux
import { combineReducers } from "redux";

//Reducer
import globReducer from "./globReducer";

const reducers = combineReducers({
  glob: globReducer,
});

export default reducers;
