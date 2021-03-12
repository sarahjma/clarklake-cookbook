import React, { useState } from "react";
import { Link } from "react-router-dom";
import header from "../assets/svg/header.svg";
import bowl from "../assets/svg/bowl.svg";
import styled from "styled-components";
import RecipeCard from "../components/RecipeCard";
import SearchResult from "../components/SearchResult";

const Home = () => {
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
    <HomeStyle>
      <div className="search-input">
        <input
          className="input-box"
          type="text"
          value={searchValue}
          onChange={handleInputChange}
        />
        {shouldDisplay && (
          <button className="clear-btn" onClick={handleClearClick}>
            x
          </button>
        )}
      </div>
      <div className="display-container">
        {shouldDisplay ? (
          <SearchResult searchValue={searchValue} />
        ) : (
          <div className="home-container">
            <div className="header-img">
              <img src={header} alt="clarklake cookbook header" />
              <img
                className="bowl-svg"
                src={bowl}
                alt="a bowl with chopsticks in it"
              />
            </div>
            <div className="recipe-category">
              <div className="header">
                <h2 className="category-title">Mains</h2>
                <Link
                  to={{ pathname: "/main", state: "main" }}
                  className="btn-cta"
                >
                  All >>
                </Link>
              </div>
              <div className="recipe-category-cards">
                <RecipeCard category="main" loadNum={3} title="" />
              </div>
            </div>
            <div className="recipe-category">
              <div className="header">
                <h2 className="category-title">Desserts</h2>
                <Link
                  to={{ pathname: "/other", state: "dessert" }}
                  className="btn-cta"
                >
                  All >>
                </Link>
              </div>
              <div className="recipe-category-cards">
                <RecipeCard category="dessert" loadNum={3} title="" />
              </div>
            </div>
            <div className="recipe-category">
              <div className="header">
                <h2 className="category-title">Others</h2>
                <Link
                  to={{ pathname: "/other", state: "other" }}
                  className="btn-cta"
                >
                  All >>
                </Link>
              </div>
              <div className="recipe-category-cards">
                <RecipeCard category="other" loadNum={3} title="" />
              </div>
            </div>
          </div>
        )}
      </div>
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  .search-input {
    text-align: right;
    padding: 1.5em;
    position: relative;
  }
  input[type="text"] {
    font-size: 2em;
  }
  .input-box {
    height: 40px;
    width: 500px;
  }
  .input-box:focus {
    outline: none;
  }
  .clear-btn {
    position: absolute;
    top: 27px;
    right: 35px;
    border: none;
    background-color: transparent;
    font-size: 1.7em;
  }
  .display-container {
    max-width: 1200px;
    margin: 0 auto;
  }
  .home-container {
    padding: 3em 0;
  }
  .header-img {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding: 1em 1em 4em;
  }
  .bowl-svg {
    max-width: 15%;
  }
  .recipe-category {
    padding: 3em 0;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn-cta {
    text-decoration: none;
    font-weight: 100;
    font-size: 1.5em;
    letter-spacing: 2px;
    padding: 0.2em 1em;
    background-color: #3d7042;
    color: white;
    border-radius: 3px;
    box-shadow: -7px 5px 20px -6px rgba(0, 0, 0, 0.34);
  }
  .category-title {
    font-size: 3em;
    text-transform: uppercase;
    padding-bottom: 0.5em;
  }
  .recipe-category-cards {
    display: flex;
    justify-content: space-between;
  }
`;

export default Home;
