import React from "react";
import { useHistory } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import styled from "styled-components";

const CategoryPage = (props) => {
  const history = useHistory();
  const category = history.location.state;
  console.log(category);

  return (
    <CategoryStyle>
      <h1 className="cat-header">{category}s</h1>
      <div className="card-container">
        <RecipeCard className="category-card" category={category} />
      </div>
    </CategoryStyle>
  );
};

const CategoryStyle = styled.div`
  padding: 3em 0;
  margin: 0 auto;
  max-width: 1200px;
  .cat-header {
    text-transform: uppercase;
    font-size: 3em;
  }
  .card-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: space-evenly;
    flex-wrap: wrap;
  }
  .card-container > * {
    margin: 3em 0;
  }
  .category-card {
    padding-bottom: 3em;
  }
`;

export default CategoryPage;
