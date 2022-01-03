import React from "react";
import useSortingOptions from "./useSortingOptionsF";

function SortingOptions({ onChange }) {
  const { value, handleChange } = useSortingOptions(onChange);

  return (
    <select className="sorting-options" value={value} onChange={handleChange}>
      <option value="">No sorting</option>
      <option value="name_asc">A to Z</option>
      <option value="name_desc">Z to A</option>
      <option value="rating">Rating</option>
    </select>
  );
}

export default SortingOptions;
