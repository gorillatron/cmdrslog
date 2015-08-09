

import {List, Map}      from "immutable"
import {EventEmitter}   from "events"
import LogObserver      from "./LogObserver"


export default class LogSession extends EventEmitter {

  constructor() {
    super()
    this.date = Date.now()
    this.data = new Map({
      enteredSystems: new List()
    })
  }

  start() {
    this.logObserver = new LogObserver()
    this.logObserver.on("enteredSystem", (system) => {
      this.logEnteredSystem(system)
    })
    this.logObserver.observe()
  }

  stop() {
    this.logObserver.destroy()
  }

  logEnteredSystem(system) {
    this.data = this.data.update("enteredSystems",
      (enteredSystems) => enteredSystems.push(system))
    this.emitChange()
  }

  emitChange() {
    this.emit("change", this.toJSON())
  }

  getEnteredSystems() {
    return this.data.get("enteredSystems").toJS()
  }

  toJSON() {
    return { date: this.date, data: this.data.toJS() }
  }

}
