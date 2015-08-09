

import {EventEmitter} from "events"


export default class AppState extends EventEmitter {

  constructor(initialstate) {
    super()
    this.state = initialstate
  }

  setState(newState) {
    this.state = this.state.merge(newState)
    this.emit("change", this.toJSON())
  }

  toJSON() {
    return this.state.toJS()
  }

}
