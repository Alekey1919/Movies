import { ActionTypes } from "./actionTypes";

export function setSortinOptions(selectedOption) {
  return {
    type: ActionTypes.SET_SORTING_OPTIONS,
    payload: selectedOption,
  };
}

export function addMovieToList(movie) {
  return {
    type: ActionTypes.ADD_MOVIE_TO_LIST,
    payload: movie,
  };
}

export function removeMovieFromList(id) {
  return {
    type: ActionTypes.REMOVE_MOVIE_FROM_LIST,
    payload: id,
  };
}
