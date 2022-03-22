import React from "react";
import TMDBImage from "../TMDBImage/TMDBImage";
import useMyListItem from "./useMyListItem";

function MyListItem({ img, title, id }) {
  const { handleRemoveFromList } = useMyListItem(id);

  return (
    <li className="my-list-item">
      <TMDBImage src={img} />
      <div>
        <p>{title}</p>
        <button onClick={handleRemoveFromList}>Remove</button>
      </div>
    </li>
  );
}

export default MyListItem;
