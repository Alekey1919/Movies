import { useState, useEffect } from "react";
import genreNames from "./genres.json"; // This json contains the actual names of the genre_ids.
import { useDispatch } from "react-redux";
import { addMovieToList } from "../../store/actions";

const useExpandedMovieItemF = (movie, handleCloseModal) => {
  const handleClose = (e) => {
    // Checking if the user clicked outside the modal to close it.
    if (e.target.classList[1] === "modal-container") {
      handleCloseModal();
    }
  };

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // This code transforms the genre_ids from the movie to their actual name.
    let innerGenres = [];
    movie.genre_ids.map((genre) =>
      genreNames.forEach((genreName) => {
        if (genreName.id === genre) {
          innerGenres.push(genreName.name);
        }
      })
    );
    setGenres(innerGenres);
  }, [movie.genre_ids]);

  const dispatch = useDispatch();

  const addToList = () => {
    dispatch(addMovieToList(movie));
  };

  return { handleClose, genres, addToList };
};

export default useExpandedMovieItemF;
