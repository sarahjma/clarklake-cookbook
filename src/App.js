import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { Switch, Route } from "react-router-dom";
// Pages`
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import Recipe from "./pages/Recipe";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <SearchBar />
      <Switch>
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
    </div>
  );
}

export default App;
