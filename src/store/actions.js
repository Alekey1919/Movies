import { ActionTypes } from "./actionTypes";

export function setSortinOptions(selectedOption) {
  return {
    type: ActionTypes.SET_SORTING_OPTIONS,
    payload: selectedOption,
  };
}
