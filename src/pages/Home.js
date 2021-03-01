import React from "react";
import header from "../assets/svg/header.svg";
import bowl from "../assets/svg/bowl.svg";
import styled from "styled-components";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  return (
    <HomeStyle>
      <div className="header-img">
        <img src={header} alt="clarklake cookbook header" />
        <img className="bowl-svg" src={bowl} alt="" />
      </div>
      <div className="recipe-category">
        <h2 className="category-title">Mains</h2>
        <div className="recipe-category-cards">
          <RecipeCard category="main" />
        </div>
      </div>
      <div className="recipe-category">
        <h2 className="category-title">Desserts</h2>
        <div className="recipe-category-cards">
          <RecipeCard category="dessert" />
        </div>
      </div>
      <div className="recipe-category">
        <h2 className="category-title">Others</h2>
        <div className="recipe-category-cards">
          <RecipeCard category="other" />
        </div>
      </div>
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3em 0;
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
