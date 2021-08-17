import Header from "./components/common/Header";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hero from "./components/home/Hero";
import HomeSections from "./components/home/HomeSections";

function App() {
  return (
    // router contains all the routes and switch is like  a normal switch 
    // that looks throught the Routes and renders the first one 
    <Router>
      <Switch>
        <Route path="/">
          <Header />
          <Hero />
          <HomeSections/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
