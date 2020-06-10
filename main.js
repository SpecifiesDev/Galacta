const {app, BrowserWindow } = require('electron');
const path = require('path');

var mainWindow = null;


const createWindow = () => {

  mainWindow = new BrowserWindow({
    frame: false,
    fullscreen: true,
    nodeIntegration: true
  });

  mainWindow.loadFile(path.join(__dirname, "/start.html"));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

}



app.on('ready', () => {
  createWindow();
  
});
