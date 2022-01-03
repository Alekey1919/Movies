import { useState } from "react";

const useSortingOptions = (onChange) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setValue(selectedValue);
    onChange(selectedValue);
  };

  return { value, handleChange };
};

export default useSortingOptions;
