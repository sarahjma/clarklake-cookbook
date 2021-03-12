import React, { useState } from "react";
import data from "../data/recipeIndex.json";
import styled from "styled-components";
import { RecipeCardStyle } from "../styles/styles";

const SearchBar = (props) => {
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
      {shouldDisplay &&
        data
          .filter((recipe) => recipe.title.toLowerCase().includes(searchValue))
          .slice(0, props.loadNum)
          .map((x) => (
            <SearchBarStyle>
              <a href={x.url} className="card">
                <div className="img-container">
                  <img className="recipe-img" src={x.attImg} alt="" />
                  <div className="icon-container">
                    <div className="dietary">
                      {x.dietary.map((y) => (
                        <p className="badge" key={y}>
                          {y}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="descrip">
                  <h3>{x.title}</h3>
                </div>
              </a>
            </SearchBarStyle>
          ))}
    </div>
  );
};

const SearchBarStyle = styled(RecipeCardStyle)``;

export default SearchBar;
