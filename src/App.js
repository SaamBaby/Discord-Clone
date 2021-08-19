import Header from "./components/common/Header";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hero from "./components/common/Hero";
import Home from "./components/home/Home";

function App() {
  return (
    // router contains all the routes and switch is like  a normal switch
    // that looks throught the Routes and renders the first one
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Hero />
        </Route>
        <Route exact path="/channels">
          <Home />
        </Route>
        <Route exact path="/channels/:id">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
