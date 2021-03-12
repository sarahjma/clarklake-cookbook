import React from "react";
import data from "../data/recipeIndex.json";
// import styled from "styled-components";
import { RecipeCardStyle } from "../styles/styles";

const RecipeCard = (props) => {
  return data
    .filter((recipe) => recipe.category === props.category)
    .sort(() => Math.random() - 0.5)
    .slice(0, props.loadNum)
    .map((x) => (
      <RecipeCardStyle key={x.title}>
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
      </RecipeCardStyle>
    ));
};

export default RecipeCard;
