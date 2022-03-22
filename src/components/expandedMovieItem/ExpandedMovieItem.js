import React from "react";
import TMDBImage from "../TMDBImage/TMDBImage";
import useExpandedMovieItem from "./useExpandedMovieItem";

function ExpandedMovieItem({ movie, handleCloseModal }) {
  const { handleClose, genres, addToList } = useExpandedMovieItem(
    movie,
    handleCloseModal
  );

  return (
    <div
      className="expanded-movie-item-f modal-container"
      onClick={(e) => handleClose(e)}
    >
      <div className="expanded-movie-item-f-modal">
        <div className="expanded-movie-item-f-modal-img">
          <TMDBImage src={movie.poster_path} alt={movie.title} />
        </div>
        <div className="expanded-movie-item-f-modal-info">
          <h1>
            {movie.title} <span>({movie.release_date.substr(0, 4)})</span>
          </h1>
          <p className="genres">{genres.join(" | ")}</p>
          <h2 className="overview">{movie.overview}</h2>
          <p className="rating">Rating: {movie.vote_average} / 10</p>
          <button onClick={addToList}>Add to my list</button>
        </div>
      </div>
    </div>
  );
}

export default ExpandedMovieItem;
