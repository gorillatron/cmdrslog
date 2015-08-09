
import React           from "react"
import Radium          from "radium"
import color           from "color"
import {RouteHandler}  from "react-router"

@Radium
export default class App extends React.Component {

  render() {
    return (
      <div style={{

        width: "100%",
        height: "100%",
        background: color("#000000").clearer(0.1).rgbaString()

      }}>
        <RouteHandler/>
      </div>
    )
  }
}
