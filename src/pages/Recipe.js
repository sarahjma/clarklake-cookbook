import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import data from "../data/recipeIndex.json";
const Recipe = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const CurrentRecipe = data.filter((x) => x.url === url);
  const info = CurrentRecipe[0];
  const ingredientsList = info.ingredientsList;
  const directionsList = info.directionsList;
  return (
    <RecipeStyle>
      <h1 className="header">{info.title}</h1>
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
              <ul>
                <li>
                  <p>{x}</p>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="list">
          <h2 className="list-header">Directions</h2>
          {directionsList.map((x) => (
            <ul>
              <li>
                <p>{x}</p>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </RecipeStyle>
  );
};

const RecipeStyle = styled.div`
  max-width: 1200px;
  display: flex;
  padding: 4em;
  flex-direction: column;
  margin: 0 auto;
  .header {
    padding: 0.5em 0 0.5em;
    text-transform: uppercase;
    font-size: 3.1em;
    letter-spacing: 4px;
  }
  .chefs-info {
    display: flex;
    text-transform: uppercase;
    font-size: 1.2em;
    padding-bottom: 1.3em;
    font-weight: 100;
    letter-spacing: 4px;
    .border-right {
      border-right: 1px solid black;
      margin: 0 1em;
    }
  }
  hr {
    border: none;
    border-top: 1px solid #9a9999;
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
  }
`;

export default Recipe;
