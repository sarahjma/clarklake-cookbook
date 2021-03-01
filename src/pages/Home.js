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
        <img
          className="bowl-svg"
          src={bowl}
          alt="a bowl with chopsticks in it"
        />
      </div>
      <div className="recipe-category">
        <div className="header">
          <h2 className="category-title">Mains</h2>
          <a key="main" href="main" className="btn-cta">
            All >>
          </a>
        </div>
        <div className="recipe-category-cards">
          <RecipeCard category="main" />
        </div>
      </div>
      <div className="recipe-category">
        <div className="header">
          <h2 className="category-title">Desserts</h2>
          <a key="dessert" href="dessert" className="btn-cta">
            All >>
          </a>
        </div>
        <div className="recipe-category-cards">
          <RecipeCard category="dessert" />
        </div>
      </div>
      <div className="recipe-category">
        <div className="header">
          <h2 className="category-title">Others</h2>
          <a key="other" href="other" className="btn-cta">
            All >>
          </a>
        </div>
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
