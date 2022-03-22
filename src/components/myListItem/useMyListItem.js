import { useDispatch } from "react-redux";
import { removeMovieFromList } from "../../store/actions";

const useMyListItem = (id) => {
  const dispatch = useDispatch();

  const handleRemoveFromList = () => {
    dispatch(removeMovieFromList(id));
  };

  return { handleRemoveFromList };
};

export default useMyListItem;
