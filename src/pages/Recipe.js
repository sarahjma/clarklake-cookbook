import React from "react";
import { useHistory } from "react-router-dom";
import Nav from "../components/Nav";
// Style & Assets
import styled from "styled-components";
import data from "../data/recipeIndex.json";

// Animation
import { motion } from "framer-motion";
import { pageTrans } from "../styles/Animation";
import { detailTitleAnim } from "../styles/Animation";
import { staggerItems } from "../styles/Animation";

// Just me again back to practice branching and pushing work flow
// Sarah Ma pushing to branch

const Recipe = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const CurrentRecipe = data.filter((x) => x.url === url);
  const info = CurrentRecipe[0];
  const ingredientsList = info.ingredientsList;
  const directionsList = info.directionsList;
  return (
    <React.Fragment>
      <Nav />
      <RecipeStyle
        variants={pageTrans}
        initial="hidden"
        animate="show"
        exit="exit"
      >
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
            <p className="chefs-info-block">
              <span className="chefs-info-label">Serves:</span>{" "}
              <span className="chefs-info-res">{info.yield}</span>
            </p>
            <span className="border-right"></span>
            <p className="chefs-info-block">
              <span className="chefs-info-label">Prep Time:</span>{" "}
              <span className="chefs-info-res">{info.prepTime}</span>
            </p>
            <span className="border-right"></span>
            <p className="chefs-info-block">
              <span className="chefs-info-label">Cook Time:</span>{" "}
              <span className="chefs-info-res">{info.cookTime}</span>
            </p>
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
    </React.Fragment>
  );
};

const RecipeStyle = styled(motion.div)`
  padding-top: 8.5em;

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
  .chefs-info-block {
    display: flex;
  }
  .chefs-info-label {
    font-weight: 400;
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
  @media only screen and (max-width: 950px) {
    .header h1 {
      font-size: 1.9em;
      padding: 0.1em 1em 0.1em 2em;
    }
    .chefs-info {
      font-size: 1.1em;
    }
    .chefs-info-block {
      flex-direction: column;
    }
    .recipe-info {
      padding: 7em 2em 4em;
    }
    .list-header {
      font-size: 2em;
    }
    li {
      font-size: 1.1em;
    }
  }
  @media only screen and (max-width: 770px) {
    padding-top: 5.5em;
    .header {
      width: 100%;
    }
    .header h1 {
      font-size: 1.5em;
      text-align: center;
      padding: 0.1em 0.5em 0.1em;
    }
    .recipe-info {
      padding: 6em 1em 4em;
    }
    .list-directions {
      padding: 2em 0;
      flex-direction: column;
    }
    .list {
      width: 100%;
    }
    .list-header {
      padding-bottom: 0.3em;
    }
    .left-block-spacer {
      padding: 0 0 2.3em 0;
    }
  }
  @media only screen and (max-width: 480px) {
    .header h1 {
      font-size: 1.3em;
    }
    .chefs-info {
      font-size: 0.8em;
      padding: 0em 1em 1.3em;
    }
    .recipe-info {
      padding: 4.5em 0 4em;
    }
    .list-directions {
      padding: 2em 1em;
    }
    .list-header {
      font-size: 1.8em;
    }
    li {
      font-size: 1em;
    }
  }
`;

export default Recipe;
