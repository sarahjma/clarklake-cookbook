import styled from "styled-components";
import { motion } from "framer-motion";

export const RecipeCardStyle = styled(motion.div)`
  max-width: 360px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  &:hover {
    opacity: 0.8;
  }
  .card {
    text-decoration: none;
  }
  .img-container {
    position: relative;
    padding: 0 5px;
  }
  .icon-container {
    position: absolute;
    top: 0.5em;
    right: 1em;
  }
  .recipe-img {
    border-radius: 5px;
  }
  .dietary {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .badge {
    background-color: #3d7042;
    padding: 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    border-radius: 50%;
    color: white;
    line-height: 19px;
    margin-left: 8px;
    border: 1px solid white;
  }
  .descrip {
    padding: 0.5em 0;
    display: flex;
    justify-content: space-between;
  }
  h3 {
    color: black;
    width: 100%;
    text-align: center;
    font-weight: 400;
    letter-spacing: 2px;
  }
`;
