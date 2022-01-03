import React from "react";
import TMDBImage from "../TMDBImage/TMDBImage";
import useMovieListItem from "./useMovieListItem";

const MovieListItem = React.forwardRef(({ movie, handleOnClick }, ref) => {
  const { rating } = useMovieListItem(movie);

  return (
    <div
      className="movie-list-item-f"
      onClick={() => handleOnClick(movie)}
      ref={ref}
    >
      <TMDBImage src={movie.poster_path} alt={movie.title} />
      <div className={`movie-list-item-f-rating ${rating}`}>
        {movie.vote_average}
      </div>
    </div>
  );
});

export default MovieListItem;
