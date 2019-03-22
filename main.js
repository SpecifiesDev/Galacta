const electron = require('electron');
const { spawn } = require('child_process');
const child = spawn('node', ['server.js']);

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');

var MainWindow = null;


const CreateWindow = () => {

  MainWindow = new BrowserWindow({
    frame: false,
    fullscreen: true
  });

  MainWindow.loadURL('http://127.0.0.1:2000');

  MainWindow.on('closed', () => {
    mainWindow = null;
  });

}


app.on('ready', function(){
  CreateWindow();
});
