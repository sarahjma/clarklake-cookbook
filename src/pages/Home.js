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
      <RecipeCard category="main" />
      <RecipeCard category="dessert" />
      <RecipeCard category="other" />
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
    /* box-shadow: 0px 7px 10px -3px rgb(27 112 35 / 39%); */
  }
  .bowl-svg {
    max-width: 15%;
  }
`;

export default Home;
