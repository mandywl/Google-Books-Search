import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import { StoreProvider } from "./utils/GlobalState";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
