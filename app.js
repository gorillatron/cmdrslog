
import fs               from "fs"
import path             from "path"
import DataStore        from "nedb"
import app              from "app"
import BrowserWindow    from "browser-window"
import ipc              from "ipc"
import LogSession       from "./lib/LogSession"
import getUserHome      from "./lib/util/getUserHome"


const dbPath = path.join(getUserHome(process), "AppData", "Local", "cmdrslog")

if (!fs.existsSync(dbPath)){
  fs.mkdirSync(dbPath)
}


var logSessionStore = new DataStore({
  filename: path.join(dbPath, "logsessions"), autoload: true })

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is GCed.

var mainWindow = null;var mainWindow = null;


app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit()
  }
})


app.on('ready', () => {

  mainWindow = new BrowserWindow({width: 1200, height: 1200, frame: false, transparent: true})

  mainWindow.loadUrl("http://localhost:3000/index.html")
  mainWindow.openDevTools({detach: true})


  mainWindow.webContents.on('did-finish-load', function() {

    ipc.on("startLogSession", (event) => {

      const logSession = new LogSession()

      logSession.on("change", (logSession) => {
        mainWindow.webContents.send("currentLogSession:change", logSession)
      })

      logSession.start()

      ipc.once("stopLogSession", () => {
        logSession.stop()
        logSessionStore.insert(logSession.toJSON(), (err) => {
          console.log(err)
        })
      })

    })

  })


  mainWindow.on('closed', function() {
    mainWindow = null
  })

})
