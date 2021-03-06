
import React           from "react"
import Radium          from "radium"
import color           from "color"
import Halogen         from "halogen"
import {RouteHandler}  from "react-router"
import theme           from "../../theme"
import SplashScreen    from "./SplashScreen"



@Radium
export default class AppComponent extends React.Component {

  constructor() {
    super()
    this.state = {
      boostrapping: true
    }
  }

  componentDidMount() {
    App.ipc.on("appstate:change", ::this.setState)
  }

  render() {
    return (
      <div style={{

        width: "100%",
        height: "100%",
        background: theme.colors.mainBackground

      }}>

        <Radium.Style rules={{
          a: {
            color: "inherit",
            "text-decoration": "none"
          }
        }} />

        {
          this.state.boostrapping &&
            <SplashScreen />
        }

        <RouteHandler
          style={{
            width: "100%",
            height: "100%"
          }}/>

      </div>
    )
  }
}
