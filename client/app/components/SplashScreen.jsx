
import React           from "react"
import Radium          from "radium"
import color           from "color"
import Halogen         from "halogen"
import theme           from "../../theme"


@Radium
export default class SplashScreen extends React.Component {

  render() {
    return (
      <div style={{

        width: "100%",
        height: "100%"


      }}>

        <div style={{
            position: "absolute",
            height: "135px",
            width: "300px",
            top: "50%",
            left: "50%",
            marginTop: "-69px",
            marginLeft: "-150px",
            textAlign: "center"
        }}>

          <h1 style={{color: color(theme.colors.primary).clearer(0.1).rgbaString() }} >CMDRS;L0g</h1>

          <div style={{
            marginTop: 20,
            marginLeft: 150 - 72
          }}>
            <Halogen.GridLoader
               size={14}
               margin={16}
               color={color(theme.colors.primary).clearer(0.5).rgbaString()}
             />
          </div>

        </div>

      </div>
    )
  }
}
