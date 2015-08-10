import React              from "react"
import Router             from "react-router"
import {HashLocation}     from "react-router"
import RouterRoot         from "./components/Routes.jsx"


const App = {

  run(options) {

    this.element = options.element
    this.ipc = options.ipc

    Router.run(RouterRoot, HashLocation, (Root) => {
      React.render(React.createElement(Root), this.element)
    })

  }

}

window.App = App
