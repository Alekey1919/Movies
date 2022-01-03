import { combineReducers } from "redux";
import sortingReducer from "./reducer";

const rootReducer = combineReducers({
  sortingOptions: sortingReducer,
});

export default rootReducer;
