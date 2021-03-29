import React from "react";
// Style & Asset
import data from "../data/recipeIndex.json";
import styled from "styled-components";
// Animation
import { RecipeCardStyle } from "../styles/styles";
import { hoverCard } from "../styles/Animation";

const SearchResult = (props) => {
  const shouldDisplay = props.searchValue.length > 0;

  return (
    <SearchStyle>
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
  padding: 1.6em 0;
  max-width: 1200px;
  margin: 0 auto;
  .query-header {
    font-size: 5em;
  }
  .search-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: space-evenly;
    flex-wrap: wrap;
  }
  .search-container > * {
    margin: 2.7em 0;
  }
`;

export default SearchResult;
