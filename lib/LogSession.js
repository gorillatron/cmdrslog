

import {List, Map} from "immutable"

export default class LogSession {

  constructor() {
    this.date = Date.now()
    this.data = new Map({
      enteredSystems: new List()
    })
  }

  enteredSystem(system) {
    this.data = this.data.update("enteredSystems",
      (enteredSystems) => enteredSystems.push(system))
  }

  getEnteredSystems() {
    return this.data.get("enteredSystems").toJS()
  }

  toJSON() {
    return { date: this.date, data: this.data.toJS() }
  }

}
