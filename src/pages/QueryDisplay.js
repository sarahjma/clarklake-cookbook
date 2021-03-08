import React from "react";
import RecipeCard from "../components/RecipeCard";

const QueryDisplay = (props) => {
  return (
    <div>
      <RecipeCard title={props.query} />
    </div>
  );
};

export default QueryDisplay;
