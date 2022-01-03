import { ActionTypes } from "./actionTypes";

const initialState = {
  sortingOptions: null,
};

export default function movies(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.SET_SORTING_OPTIONS:
      return {
        ...state,
        sortingOptions: payload,
      };

    default:
      return state;
  }
}
