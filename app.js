
import fs                       from "fs"
import path                     from "path"
import DataStore                from "nedb"
import app                      from "app"
import BrowserWindow            from "browser-window"
import ipc                      from "ipc"
import getUserHome              from "./lib/util/getUserHome"
import AppState                 from "./lib/AppState"
import Dispatcher               from "./lib/Dispatcher"
import {fromJS as toImmutable}  from "immutable"


var mainWindow = null


const appstate = new AppState(toImmutable({
  userPrefrences: {
    gameDir: 'C:/Program Files (x86)/Steam/steamapps/common/Elite Dangerous',
    logDir: '/Products/FORC-FDEV-D-1010/Logs'
  },
  boostrapping: true,
  currentLogSession: null,
  logSessions:[]
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
    }, 1200)

  })


  mainWindow.on('closed', () => {
    mainWindow = null
  })

})
