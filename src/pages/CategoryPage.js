import React from "react";
import { useHistory } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

// import data from "../data/recipeIndex.json";

const CategoryPage = () => {
  const history = useHistory();
  console.log(history);
  // const categoryUrl = history.location.pathname;
  // const CurrentRecipe = data.filter((x) => x.categoryUrl === categoryUrl);
  return (
    <div>
      <RecipeCard />
    </div>
  );
};

export default CategoryPage;
