import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./scss/init.scss";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/404" component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
