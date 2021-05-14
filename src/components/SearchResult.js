import React from "react";
// Style & Asset
import data from "../data/recipeIndex.json";
import styled from "styled-components";
import Nav from "../components/Nav";
// Animation
import { RecipeCardStyle } from "../styles/styles";
import { hoverCard } from "../styles/Animation";

const SearchResult = (props) => {
  const shouldDisplay = props.searchValue.length > 0;

  return (
    <SearchStyle>
      <Nav />
      <h2 className="query-header">"{props.searchValue}"</h2>
      <div className="search-container">
        {shouldDisplay &&
          data
            .filter((recipe) =>
              recipe.tags.find((t) => {
                return t.includes(props.searchValue);
              })
            )
            .slice(0, props.loadNum)
            .map((x) => (
              <SearchResultStyle
                variants={hoverCard}
                whileHover="hover"
                key={x.title}
              >
                <a href={x.url} className="card">
                  <div className="img-container">
                    <img className="recipe-img" src={x.attImg} alt="" />
                    <div className="icon-container">
                      <div className="dietary">
                        {x.dietary.map((y) => (
                          <p className="badge" key={y}>
                            {y}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="descrip">
                    <h3>{x.title}</h3>
                  </div>
                </a>
              </SearchResultStyle>
            ))}
      </div>
    </SearchStyle>
  );
};

const SearchResultStyle = styled(RecipeCardStyle)``;
const SearchStyle = styled.div`
  padding: 8.5em 0;
  max-width: 1200px;
  margin: 0 auto;
  .query-header {
    font-size: 5em;
    padding: 0em 0.5em;
  }
  .search-container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: space-evenly;
    flex-wrap: wrap;
  }
  .search-container > * {
    margin: 2.7em 0;
  }
  @media only screen and (max-width: 1080px) {
    .query-header {
      text-align: center;
    }
  }
  @media only screen and (max-width: 770px) {
    .query-header {
      font-size: 3.5em;
    }
`;

export default SearchResult;
