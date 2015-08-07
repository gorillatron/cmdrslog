
import React    from "react";
import {Route}  from "react-router"
import App      from "./App.jsx"
import Home     from "./home/Home.jsx"


export default (
  <Route handler={App}>
    <Route path="/" handler={Home}>
    </Route>
  </Route>
)
