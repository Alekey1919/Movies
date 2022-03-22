import { ActionTypes } from "./actionTypes";

const initialState = {
  myList: [],
};

export default function myListReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.ADD_MOVIE_TO_LIST:
      let isAlready = false;
      state.myList.forEach((movie) => {
        if (movie.id === payload.id) {
          isAlready = true;
        }
      });

      if (!isAlready) {
        return {
          ...state,
          myList: [...state.myList, payload],
        };
      } else {
        return state;
      }

    case ActionTypes.REMOVE_MOVIE_FROM_LIST:
      const index = state.myList.findIndex(
        (listItem) => listItem.id === payload
      );
      let newList = [...state.myList];

      if (index >= 0) {
        newList.splice(index, 1);
      } else {
        console.warn(
          `Can't remove movie (id: ${payload}) as it's not in the basket!`
        );
      }
      return { ...state, myList: newList };

    default:
      return state;
  }
}
