
import {EventEmitter}         from "events"
import logStream              from "./streams/logStream"
import systems                from "./streams/systems"
import distinctSystems        from "./streams/distinctSystems"
import getNewestLogFilePath   from "./util/fs/getNewestLogFilePath"


export default class LogObserver extends EventEmitter {

  observe(spec = {dir: null}) {

    if(this._isObserving)
      throw new Error("LogObserver::observe called when already observing")

    this._isObserving = true

    const logFilePath = getNewestLogFilePath(spec.dir)

    this.ls = logStream({
      path: logFilePath,
      lines: 999999
    })

    const systemStream = this.ls.fork().through(systems)
    const enteredSystemStream = systemStream.fork().through(distinctSystems)

    enteredSystemStream.each((system) => {
      this.emit("enteredSystem", system)
    })
  }

  destroy() {
    if(this.ls) {
      this.ls.destroy()
    }
    this.removeAllListeners()
    this._isObserving = false
  }

}
