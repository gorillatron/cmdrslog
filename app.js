
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

var mainWindow = null


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

  mainWindow.webContents.on('did-finish-load', function() {

    ipc.on("action", (event) => {


    })

  })


  mainWindow.on('closed', function() {
    mainWindow = null
  })

})
