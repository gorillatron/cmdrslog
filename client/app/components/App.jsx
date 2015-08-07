
import React           from "react"
import Radium          from "radium"
import {RouteHandler}  from "react-router"

@Radium
export default class App extends React.Component {

  render() {
    return (
      <div>
        APP:
        <RouteHandler/>
      </div>
    )
  }
}
