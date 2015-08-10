
import React                  from "react"
import Radium                 from "radium"
import {RouteHandler, Link}   from "react-router"


const tabs = [

  { name: "logsessions",
    path: "/logsessions",
    icon: "radar1" },

  { name: "prefrences",
    path: "/prefrences",
    icon: "configuration28" }

]


@Radium
export default class SideMenu extends React.Component {


  render() {

    return (
      <div
        id="SideMenu"
        style={[
          this.props.style,
          {
            background: "rgba(10,10,10, 0.96)",
            textAlign: "center"
          }
        ]}>

        <ul>
          {
            tabs.map((tab) => (
              <li
                style={{
                  padding: 20,
                  color: "rgb(230,230,230)"
                }}>
                <Link to={tab.name}>
                  <div style={{fontSize: "38px", fontWeight: "thin"}} className={("glyph-icon flaticon-" + tab.icon)} />
                </Link>
              </li>
            ))
          }>
        </ul>

      </div>
    )
  }

}
