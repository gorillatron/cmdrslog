
import React           from "react"
import {RouteHandler}  from "react-router"

export default class Home extends React.Component {

  constructor() {
    super()
    this.state = {
      activeSession: false
    }
    console.log(this)
  }

  componentDidMount() {
    App.ipc.on("enteredSystems", (enteredSystems) => this.setState({enteredSystems}))
  }

  render() {
    return (
      <div>
        <button onClick={::this.toggleLogSession}>
          {
            !this.state.activeSession ?
              "start" :
              "stop"
          }
        </button>


        <ul>
        {
          this.state.enteredSystems &&
            this.state.enteredSystems.map((system) => <li key={system.name}>{system.name}</li>)
        }
        </ul>

        <RouteHandler/>
      </div>
    )
  }

  toggleLogSession() {
    const activeSession = !this.state.activeSession
    
    this.setState({ activeSession })

    if(activeSession) {
      console.log("start")
      App.ipc.send("startLogSession", 1)
    }
    else {
      console.log("stop")
      App.ipc.send("stopLogSession", 1)
    }
  }

}
