import { combineReducers } from "redux";
import sortingReducer from "./sortingOptionsReducer";
import myListReducer from "./myListReducer";

const rootReducer = combineReducers({
  sortingOptions: sortingReducer,
  myList: myListReducer,
});

export default rootReducer;
