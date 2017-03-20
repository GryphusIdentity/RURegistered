const { app, BrowserWindow } = require('electron')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 1360, height: 800})
  mainWindow.loadURL('http://localhost:8080/index.html')
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function() {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
