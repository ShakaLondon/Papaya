import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import appReducer from "./appReducer";

const reducers = combineReducers({
  appState: appReducer,
  searchRes: searchReducer,
});

export default reducers;
