import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import QueryDisplay from "../pages/QueryDisplay";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    console.log(searchValue);
  };

  const handleClearClick = () => {
    setSearchValue("");
  };

  const shouldDisplay = searchValue.length > 0;

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      {shouldDisplay && <button onClick={handleClearClick}>x</button>}
    </div>
  );
};

export default SearchBar;
