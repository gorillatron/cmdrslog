
import React          from "react";
import {Route}        from "react-router"
import App            from "./App.jsx"
import Home           from "./home/Home.jsx"
import Logsessions    from "./home/logsessions/Logsessions"
import Prefrences     from "./home/prefrences/Prefrences"


export default (
  <Route handler={App}>
    <Route path="/" handler={Home}>

      <Route name="logsessions" path="/logsessions" handler={Logsessions}>
      </Route>

      <Route name="prefrences" path="/prefrences" handler={Prefrences}>
      </Route>

    </Route>
  </Route>
)
