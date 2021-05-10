import React, { useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { Switch, Route, useLocation } from "react-router-dom";
import SearchResult from "../src/components/SearchResult";
import styled from "styled-components";
// Pages`
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import Recipe from "./pages/Recipe";
import ScrollTop from "./components/ScrollTop";

// Animation
import { AnimatePresence } from "framer-motion";

function App() {
  // LOCATION FOR FRAMER MOTION EXIT ANIMATION
  const location = useLocation();

  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setSearchValue("");
  };

  const shouldDisplay = searchValue.length > 0;
  return (
    <div className="App">
      <ScrollTop />
      <GlobalStyle />
      <SearchBarStyle>
        <div className="search-input">
          <InputStyle
            className={shouldDisplay ? "input-box" : null}
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Type to Search"
          />

          {shouldDisplay ? (
            <button className="clear-btn" onClick={handleClearClick}>
              <i className="fas fa-times"></i>
            </button>
          ) : (
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          )}
        </div>
      </SearchBarStyle>
      <AnimatePresence exitBeforeEnter>
        {shouldDisplay ? (
          <SearchResult searchValue={searchValue} />
        ) : (
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/:id/:id">
              <Recipe />
            </Route>
            <Route path="/:id">
              <CategoryPage />
            </Route>
          </Switch>
        )}
      </AnimatePresence>
    </div>
  );
}

const InputStyle = styled.input`
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: black;
  font-size: 16px;
  transition: 0.4s;
  line-height: 40px;
  width: 0;
`;

const SearchBarStyle = styled.div`
  position: relative;
  input[type="text"] {
    font-size: 1em;
  }

  .search-input {
    position: absolute;
    top: 55px;
    left: 95%;
    /* transform: translate(-50%, -50%); */
    transform: translate(-100%, -50%);
    background: white;
    border-radius: 40px;
    border: 3px solid #3d7042;
    display: flex;
  }

  .search-btn,
  .clear-btn {
    color: #3d7042;
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
    justify-content: center;
    align-items: center;
    display: flex;
    transition: 0.4s;
    border: none;
  }
  .search-btn:focus,
  .clear-btn:focus {
    outline: none;
  }
  .search-btn:hover,
  .clear-btn:hover {
    cursor: pointer;
  }
  .search-input:hover > input {
    width: 230px;
    padding: 0 1em;
  }
  .input-box {
    padding: 0 1em;
    width: 230px;
  }
  @media only screen and (max-width: 770px) {
    .search-input {
      top: 44px;
    }
  }
`;

export default App;
