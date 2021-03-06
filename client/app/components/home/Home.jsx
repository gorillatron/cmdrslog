
import React           from "react"
import Radium          from "radium"
import {RouteHandler}  from "react-router"
import SideMenu        from "./SideMenu"


@Radium
export default class Home extends React.Component {

  render() {

    return (
      <div style={[this.props.style]}>

        <SideMenu style={{ width: "94px", height: "100%" }}/>

      </div>
    )
  }

}
