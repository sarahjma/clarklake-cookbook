import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// Style & Assets
import data from "../data/recipeIndex.json";
import { RecipeCardStyle } from "../styles/styles";
// Animation
import { hoverCard } from "../styles/Animation";

const RecipeCard = (props) => {
  return data
    .filter((recipe) => recipe.category === props.category)
    .sort(() => Math.random() - 0.5)
    .slice(0, props.loadNum)
    .map((x) => (
      <RecipeCardStyle variants={hoverCard} whileHover="hover" key={x.title}>
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
