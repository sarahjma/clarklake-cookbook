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

const NavStyle = styled.nav`
  position: relatlve;
  .home-btn img {
    position: absolute;
    top: 1%;
    left: 4%;
    max-width: 73px;
    padding: 0.5em;
    /* margin: 0.5em 2.5em; */
  }
  @media only screen and (max-width: 770px) {
    .home-btn img {
      max-width: 60px;
      top: 3%;
    }
  }
`;

export default Nav;
