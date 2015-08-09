
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
    App.ipc.on("stateChange", ::this.setState)
  }

  render() {
    return (
      <div style={{

        width: "100%",
        height: "100%",
        background: theme.colors.mainBackground

      }}>

        {
          this.state.boostrapping ?

            <SplashScreen /> :

            <div>
              LOADED
            </div>
        }

      </div>
    )
  }
}
