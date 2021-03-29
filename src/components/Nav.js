import React from "react";
import { Link } from "react-router-dom";

import bowl from "../assets/svg/bowl.svg";

import styled from "styled-components";

import { motion } from "framer-motion";
import { hoverBtn } from "../styles/Animation";

const Nav = () => {
  return (
    <NavStyle>
      <Link to="/" className="home-btn">
        <motion.img variants={hoverBtn} whileHover="hover" src={bowl} alt="" />
      </Link>
    </NavStyle>
  );
};

const NavStyle = styled.div`
  .home-btn img {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 4%;
    padding: 0.5em;
    margin: 0.5em 2.5em;
  }
`;

export default Nav;
