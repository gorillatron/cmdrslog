
import fs               from "fs"
import app              from "app"
import BrowserWindow    from "browser-window"
import ipc              from "ipc"
import LogSession       from "./lib/LogSession"
import LogObserver      from "./lib/LogObserver"


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is GCed.
var mainWindow = null;


app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit()
  }
})


app.on('ready', () => {

  mainWindow = new BrowserWindow({width: 1200, height: 1200});
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.openDevTools()


  mainWindow.webContents.on('did-finish-load', function() {
    //mainWindow.webContents.send event content

    ipc.on("startLogSession", (event) => {
      const logSession = new LogSession()
      const logObserver = new LogObserver()

      logObserver.on("enteredSystem", (system) => {
        console.log(system)
        logSession.enteredSystem(system)
        mainWindow.webContents.send("enteredSystems", logSession.getEnteredSystems())
      })

      logObserver.observe()

      ipc.once("stopLogSession", () => {
        logObserver.destroy()
      })

    })

  })


  mainWindow.on('closed', function() {
    mainWindow = null;
  })

})
