
import fs               from "fs"
import path             from "path"
import DataStore        from "nedb"
import app              from "app"
import BrowserWindow    from "browser-window"
import ipc              from "ipc"
import getUserHome      from "./lib/util/getUserHome"
import AppState         from "./lib/AppState"
import Dispatcher       from "./lib/Dispatcher"
import {Map}            from "immutable"


var mainWindow = null


const appstate = new AppState(new Map({
  boostrapping: true,
  currentLogSession: null
}))


const dispatcher = new Dispatcher()


app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit()
  }
})


app.on('ready', () => {

  mainWindow = new BrowserWindow({width: 1000, height: 1000, frame: false, transparent: true})

  mainWindow.loadUrl("http://localhost:3000/index.html")
  mainWindow.openDevTools({detach: true, x: 100})
  mainWindow.setPosition(1520, 100)


  mainWindow.webContents.on('did-finish-load', () => {

    ipc.on("action", (event, action, ...params) => {
      dispatcher.dispatch(action, ...params)
    })

    appstate.on("change", (appstate) => {
      mainWindow.webContents.send("appstate:change", appstate)
    })

    setTimeout(() => {
      appstate.setState({boostrapping: false})
    }, 500)

  })


  mainWindow.on('closed', () => {
    mainWindow = null
  })

})
