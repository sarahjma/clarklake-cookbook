import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { Switch, Route } from "react-router-dom";
// Pages`
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:id">
          <CategoryPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
