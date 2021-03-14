import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { Switch, Route, useLocation } from "react-router-dom";
// Pages`
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import Recipe from "./pages/Recipe";
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";

function App() {
  // LOCATION FOR FRAMER MOTION EXIT ANIMATION
  const location = useLocation();
  return (
    <div className="App">
      <ScrollTop />
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
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
      </AnimatePresence>
    </div>
  );
}

export default App;
