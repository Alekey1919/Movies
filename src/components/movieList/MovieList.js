import React from "react";
import MovieListItem from "../movieListItem/MovieListItem";
import ExpandedMovieItem from "../expandedMovieItem/ExpandedMovieItem";
import useMovieList from "./useMovieList";
import { connect } from "react-redux";
import Loading from "../../media/loading.svg";

function MovieList(props) {
  const {
    selectedMovie,
    handleSelect,
    handleClose,
    movies,
    isLoading,
    lastMovieElementRef,
  } = useMovieList(props.sortingOptions);

  if (isLoading) {
    return <img src={Loading} alt="Loading" className="loading" />;
  }

  return (
    <div className="movie-list-f">
      <div className="movie-list-f-grid">
        {movies.map((movie, key) => {
          if (movies.length === key + 1) {
            // If this is the last movie the ref is forwarded to keep track of the node and trigger the infinite scroll.
            return (
              <MovieListItem
                key={key}
                ref={lastMovieElementRef}
                movie={movie}
                handleOnClick={handleSelect}
              />
            );
          } else {
            return (
              <MovieListItem
                key={key}
                movie={movie}
                handleOnClick={handleSelect}
              />
            );
          }
        })}
        {selectedMovie && (
          <ExpandedMovieItem
            movie={selectedMovie}
            handleCloseModal={handleClose}
          />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sortingOptions: state.sortingOptions.sortingOptions,
  };
};

// Since the sortingOptions component is in the navbar component and not in this one, this one has to be connected to the Redux store to access the current selected sort option
export default connect(mapStateToProps)(MovieList);
