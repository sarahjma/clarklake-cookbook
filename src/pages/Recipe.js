import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import data from "../data/recipeIndex.json";
import bowl from "../assets/svg/bowl.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageTrans } from "../styles/Animation";
import { detailTitleAnim } from "../styles/Animation";
import { staggerItems } from "../styles/Animation";
import { hoverBtn } from "../styles/Animation";

const Recipe = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const CurrentRecipe = data.filter((x) => x.url === url);
  const info = CurrentRecipe[0];
  const ingredientsList = info.ingredientsList;
  const directionsList = info.directionsList;
  return (
    <RecipeStyle
      variants={pageTrans}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Link to="/" className="home-btn">
        <motion.img variants={hoverBtn} whileHover="hover" src={bowl} alt="" />
      </Link>
      <motion.div
        variants={detailTitleAnim}
        initial="hidden"
        animate="show"
        className="header"
      >
        <div className="header-container">
          <h1>{info.title}</h1>
        </div>
      </motion.div>
      <motion.div
        variants={staggerItems}
        initial="hidden"
        animate="show"
        className="recipe-info"
      >
        <div className="chefs-info">
          <p>Serves: {info.yield}</p>
          <span className="border-right"></span>
          <p>Prep Time: {info.prepTime}</p>
          <span className="border-right"></span>
          <p>Cook Time: {info.cookTime}</p>
        </div>
        <hr />
        <img src={info.bannerImg} alt="" />
        <div className="list-directions">
          <div className="list">
            <div className="left-block-spacer">
              <h2 className="list-header">Ingredients</h2>
              {ingredientsList.map((x) => (
                <ul key={x}>
                  <li className="list-ingredients">
                    <input type="checkbox" />
                    <p>{x}</p>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="list">
            <h2 className="list-header">Directions</h2>
            {directionsList.map((x) => (
              <ul key={x}>
                <li>
                  <p>{x}</p>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </motion.div>
    </RecipeStyle>
  );
};

const RecipeStyle = styled(motion.div)`
  margin-top: 5.5em;
  .home-btn img {
    position: absolute;
    top: 0;
    right: 0;
    max-width: 4%;
    padding: 0.5em;
    margin: 0.5em 2.5em;
  }
  .header {
    position: absolute;
    left: 0;
    text-transform: uppercase;
    font-size: 1.7em;
    letter-spacing: 4px;
    background-color: #3d7042;
  }
  .header-container {
    margin: 0 auto;
  }
  .header h1 {
    color: white;
    padding: 0.1em 1em 0.1em 5.5em;
  }
  .recipe-info {
    max-width: 1200px;
    display: flex;
    padding: 7em 4em 4em;
    flex-direction: column;
    margin: 0 auto;
  }
  .chefs-info {
    display: flex;
    text-transform: uppercase;
    font-size: 1.2em;
    padding: 0em 0 1.3em;
    font-weight: 100;
    letter-spacing: 4px;
    .border-right {
      border-right: 1px solid black;
      margin: 0 1em;
    }
  }
  hr {
    border: none;
    border-top: 1px solid black;
    padding-bottom: 2em;
  }
  img {
    max-width: 100%;
  }
  .list-directions {
    padding: 4em 0;
    display: flex;
  }
  .list {
    width: 50%;
  }
  .left-block-spacer {
    padding-right: 2em;
  }
  .list-header {
    text-transform: uppercase;
    padding-bottom: 0.8em;
    font-size: 2.2em;
    letter-spacing: 4px;
    font-weight: 400;
  }
  li {
    padding: 0.9em 0;
    list-style: none;
    font-size: 1.2em;
    font-weight: 100;
    letter-spacing: 0.3px;
    font-family: "Oxygen", sans-serif;
  }
  .list-ingredients {
    display: flex;
    align-items: center;
  }
  .list-ingredients input {
    background-color: #3d7042;
  }
  .list-ingredients p {
    padding-left: 1em;
  }
`;

export default Recipe;
