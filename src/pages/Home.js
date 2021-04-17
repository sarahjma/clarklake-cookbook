import React from "react";
import { Link } from "react-router-dom";
// Components
import RecipeCard from "../components/RecipeCard";
// import SearchResult from "../components/SearchResult";
// Style & Asset
import styled from "styled-components";
import header from "../assets/svg/header.svg";
// Animation
import { motion } from "framer-motion";
import { pageTrans } from "../styles/Animation";
import { staggerItems } from "../styles/Animation";
import { hoverBtn } from "../styles/Animation";

const Home = () => {
  return (
    <HomeStyle variants={pageTrans} initial="hidden" animate="show" exit="exit">
      <div className="display-container">
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
      </div>
    </HomeStyle>
  );
};

const HomeStyle = styled(motion.div)`
  .display-container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 3em;
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
  @media only screen and (max-width: 620px) {
  }
`;

export default Home;
