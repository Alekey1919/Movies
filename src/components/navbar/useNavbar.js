import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSortinOptions } from "../../store/actions";

const useNavbar = () => {
  const [hide, setHide] = useState(false);
  const lastScrollRef = useRef(0); // This ref is used to hide the navbar when the window scrolls down and show the navbar when it scrolls up. The reason it is a useRef and not a useState is because the event listener doesn't keep track of the current value of states, it only takes into account the original value. So although the event listener can change the value of the state with the setState function, it will always show the original value that was set when the state was defined.

  const dispatch = useDispatch();

  const handleChange = (order) => {
    // Since the sortingOptions component is inside the navbar and the MovieList component has to keep track of it in order to sort the movies, the current option is sent in the Redux store.
    dispatch(setSortinOptions(order));
  };

  const controlNavbar = () => {
    if (window.scrollY >= lastScrollRef.current) {
      setHide(true);
    } else {
      setHide(false);
    }
    lastScrollRef.current = window.scrollY;
  };

  const [mobileActive, setMobileActive] = useState(false);

  const handleHamburguer = () => {
    setMobileActive((currState) => !currState);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
  }, []);

  return { hide, handleChange, controlNavbar, mobileActive, handleHamburguer };
};

export default useNavbar;
