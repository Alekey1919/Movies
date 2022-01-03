import { useState, useEffect } from "react";

const useMovieListItem = (movie) => {
  const [rating, setRating] = useState();

  useEffect(() => {
    if (movie.vote_average >= 8) {
      setRating("green");
    } else if (movie.vote_average >= 5) {
      setRating("yellow");
    } else {
      setRating("red");
    }
  }, [movie.vote_average]);

  return { rating };
};

export default useMovieListItem;
