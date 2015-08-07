
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

  const ls = logstream({
    gamerunning: true,
    logdir: 'C:/Program Files (x86)/Steam/steamapps/common/Elite Dangerous/Products/FORC-FDEV-D-1010/Logs'
  })

  mainWindow.webContents.on('did-finish-load', function() {
    // entersystemstream.each((enteredsystem) => {
    //   mainWindow.webContents.send('enteredsystem', enteredsystem)
    // })
  })


  mainWindow.on('closed', function() {
    mainWindow = null;
  })
});
