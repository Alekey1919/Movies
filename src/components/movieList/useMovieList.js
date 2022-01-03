import { useState, useEffect, useRef, useCallback } from "react";
import Axios from "axios";

const useMovieList = (sortingOptions) => {
  const APILink = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=`;

  // --------------- Fetching first 3 pages from TMDB API ---------------

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const fetchInitialMovies = async (page) => {
    try {
      let response = await Axios.get(APILink + page);
      setMovies((prevState) => prevState.concat(response.data.results));
    } catch (error) {
      console.error("Error while fetching movies", error);
    }
  };

  useEffect(() => {
    fetchInitialMovies("1");
    fetchInitialMovies("2");
    setIsLoading(false);
  }, []);

  // --------------- Handling modal ---------------

  const [selectedMovie, setSelectedMovie] = useState();

  const handleSelect = (selected) => {
    setSelectedMovie(selected);
    document.querySelector("*").classList.add("no-scroll");
  };

  const handleClose = () => {
    setSelectedMovie();
    document.querySelector("*").classList.remove("no-scroll");
  };

  // --------------- Handling the sorting options ---------------

  const sortMovies = () => {
    let sorted;
    if (sortingOptions === "name_asc") {
      sorted = movies.sort((a, b) => {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
      });
    } else if (sortingOptions === "name_desc") {
      sorted = movies.sort((a, b) => {
        return b.title.toLowerCase().localeCompare(a.title.toLowerCase());
      });
    } else if (sortingOptions === "rating") {
      sorted = movies.sort((a, b) => {
        return b.vote_average - a.vote_average;
      });
    }

    if (sorted) {
      setMovies([...sorted]);
    } else {
      if (sortingOptions === "") {
        // If sorted is undefined and the sortingOptions is "" the sortingOption has been deselected, therefore it fetches the API for the initial 20 movies. The reason the original movies state is not saved is to avoid occupying unnecessary memory by having two separated states of movies.
        Axios.get(APILink + 1)
          .then((res) => {
            setMovies(res.data.results);
            setPageNumber(2);
          })
          .catch((err) => console.error(err.message));
      }
    }
  };

  useEffect(() => {
    sortMovies();
  }, [sortingOptions]);

  // --------------- Infinite scroll ---------------

  const [pageNumber, setPageNumber] = useState(3);
  const [hasMore, setHasMore] = useState(true); // This state takes care of stop sending requests when the user has scrolled all the way down.

  const observer = useRef();
  const lastMovieElementRef = useCallback(
    (node) => {
      if (isLoading) return; // This prevents the function from running when the first fetches are in process.
      if (observer.current) observer.current.disconnect(); // This disconnects the current observer to connect it to the new last movieItem.
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          // If the last movieItem is visible the currNumber is incremented so that the useEffect loads one more page.
          setPageNumber((currNumber) => currNumber + 1);
        }
      });
      if (node) observer.current.observe(node); // If there is a last element we make sure the observer observes it
    },
    [isLoading, hasMore]
  );

  const fetchMoreMovies = async () => {
    if (hasMore) {
      try {
        let response = await Axios.get(APILink + pageNumber);
        setMovies((prevState) => prevState.concat(response.data.results));
        setHasMore(response.data.results.length > 0);
      } catch (error) {
        console.error("Error while fetching more movies", error);
      }
    }
  };

  useEffect(() => {
    fetchMoreMovies();
  }, [pageNumber]);

  // --------------- Returning all the functions and states for the MovieLisfF component ---------------

  return {
    selectedMovie,
    handleSelect,
    handleClose,
    movies,
    isLoading,
    lastMovieElementRef,
  };
};

export default useMovieList;
