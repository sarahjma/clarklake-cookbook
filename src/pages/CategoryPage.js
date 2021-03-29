import React from "react";
import { useHistory } from "react-router-dom";
// Style & Assets
import RecipeCard from "../components/RecipeCard";
import styled from "styled-components";

// Animation
import { motion } from "framer-motion";
import { pageTrans } from "../styles/Animation";
import { catTitleAnim } from "../styles/Animation";
import { staggerItems } from "../styles/Animation";

const CategoryPage = (props) => {
  const history = useHistory();
  const category = history.location.state;
  console.log(category);

  return (
    <CategoryStyle
      variants={pageTrans}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.h1
        variants={catTitleAnim}
        initial="hidden"
        animate="show"
        className="cat-header"
      >
        {category}s
      </motion.h1>
      <motion.div
        variants={staggerItems}
        initial="hidden"
        animate="show"
        className="card-container"
      >
        <RecipeCard className="category-card" category={category} />
      </motion.div>
    </CategoryStyle>
  );
};

const CategoryStyle = styled(motion.div)`
  padding: 9em 0;
  margin: 0 auto;
  max-width: 1200px;
  .cat-header {
    text-transform: uppercase;
    font-size: 5em;
    letter-spacing: 5px;
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
