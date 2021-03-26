import React, { useState } from "react";
import { Link } from "react-router-dom";
// Components
import RecipeCard from "../components/RecipeCard";
import SearchResult from "../components/SearchResult";
// Style & Asset
import styled from "styled-components";
import header from "../assets/svg/header.svg";
// Animation
import { motion } from "framer-motion";
import { pageTrans } from "../styles/Animation";
import { staggerItems } from "../styles/Animation";
import { hoverBtn } from "../styles/Animation";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setSearchValue("");
  };

  const shouldDisplay = searchValue.length > 0;

  return (
    <HomeStyle variants={pageTrans} initial="hidden" animate="show" exit="exit">
      <div className="search-bounds">
        <div className="search-input">
          <InputStyle
            className={shouldDisplay ? "input-box" : null}
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Type to Search"
          />

          {shouldDisplay ? (
            <button className="clear-btn" onClick={handleClearClick}>
              <i className="fas fa-times"></i>
            </button>
          ) : (
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          )}
        </div>
      </div>
      <div className="display-container">
        {shouldDisplay ? (
          <SearchResult searchValue={searchValue} />
        ) : (
          <div className="home-container">
            <div className="header-img">
              <img src={header} alt="" />
            </div>
            <motion.div
              variants={staggerItems}
              initial="hidden"
              animate="show"
              className="recipe-category"
            >
              <div className="header">
                <h2 className="category-title">Mains</h2>
                <motion.div variants={hoverBtn} whileHover="hover">
                  <Link
                    to={{ pathname: "/main", state: "main" }}
                    className="btn-cta"
                  >
                    View All
                  </Link>
                </motion.div>
              </div>
              <div className="recipe-category-cards">
                <RecipeCard category="main" loadNum={3} title="" />
              </div>
            </motion.div>
            <div className="recipe-category">
              <div className="header">
                <h2 className="category-title">Desserts</h2>
                <motion.div variants={hoverBtn} whileHover="hover">
                  <Link
                    to={{ pathname: "/other", state: "dessert" }}
                    className="btn-cta"
                  >
                    View All
                  </Link>
                </motion.div>
              </div>
              <div className="recipe-category-cards">
                <RecipeCard category="dessert" loadNum={3} title="" />
              </div>
            </div>
            <div className="recipe-category">
              <div className="header">
                <h2 className="category-title">Others</h2>
                <motion.div variants={hoverBtn} whileHover="hover">
                  <Link
                    to={{ pathname: "/other", state: "other" }}
                    className="btn-cta"
                  >
                    View All
                  </Link>
                </motion.div>
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

const InputStyle = styled.input`
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: black;
  font-size: 16px;
  transition: 0.4s;
  line-height: 40px;
  width: 0;
`;

const HomeStyle = styled(motion.div)`
  input[type="text"] {
    font-size: 1em;
  }
  .search-bounds {
    position: relative;
  }
  .search-input {
    position: absolute;
    top: 85px;
    left: 85%;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 40px;
    border: 3px solid #3d7042;
    display: flex;
  }

  .search-btn,
  .clear-btn {
    color: #3d7042;
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
    justify-content: center;
    align-items: center;
    display: flex;
    transition: 0.4s;
    border: none;
  }
  .search-btn:focus,
  .clear-btn:focus {
    outline: none;
  }
  .search-btn:hover,
  .clear-btn:hover {
    cursor: pointer;
  }
  .search-input:hover > input {
    width: 290px;
    padding: 0 1em;
  }
  .input-box {
    padding: 0 1em;
    width: 290px;
  }

  .display-container {
    max-width: 1200px;
    margin: 0 auto;
  }
  .home-container {
    padding: 7em 0;
  }
  .header-img {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding: 1em;
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
    box-shadow: -7px 5px 14px -6px rgba(0, 0, 0, 0.25);
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
