// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
const path = require('path');
const { format: urlFormat } = require('url');

// Is Development mode
const isDev = process.env.NODE_ENV !== 'production';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// Disable security warnings
if (isDev) process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

// Window URL
const windowURL = isDev
  ? `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`
  : urlFormat({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true,
    });

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#fafafa',
    webPreferences: {
      nodeIntegration: true,
      preload: path.resolve(__dirname, 'preload.js'),
    },
  });

  // Load the index html for application
  mainWindow.loadURL(windowURL);

  // Are we in Dev mode?
  if (isDev) {
    // Open dev tools initially when in development mode
    mainWindow.webContents.on('did-frame-finish-load', () => {
      mainWindow.webContents.once('devtools-opened', () => {
        mainWindow.focus();
      });
      // Open Developer Tools window
      mainWindow.webContents.openDevTools();
    });
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit();
});

// On window activate
app.on('activate', function() {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
