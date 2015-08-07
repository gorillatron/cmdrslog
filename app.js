
import Y                from "highland"
import colors           from "colors"


import app              from "app"
import BrowserWindow    from "browser-window"


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

  mainWindow.webContents.on('did-finish-load', function() {
    let i = 0
    setInterval(() => mainWindow.webContents.send('ping', i++), 333)
  })

  mainWindow.openDevTools()

  mainWindow.on('closed', function() {
    mainWindow = null;
  })
});
