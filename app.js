const { app, BrowserWindow } = require('electron');

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      nodeIntegration: true
    },
    frame: false,
  })

  // and load the index.html of the app.
  win.loadFile('gui/index.html')
}

app.whenReady().then(createWindow)