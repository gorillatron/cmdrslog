
import Promise from "bluebird"
import {List}  from "immutable"

export default class Dispatcher {

  constructor() {
    this.actionQueue = new List()
  }

  dispatch(action, ...params) {
    this.actionQueue = this.actionQueue.push({ action, params })
    if(!this._isProcessingQueue) {
      this.processQueue()
    }
  }

  processQueue() {
    this._isProcessingQueue = true
    
  }

}
