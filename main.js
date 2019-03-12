const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');

var MainWindow = null;


const CreateWindow = () => {

  MainWindow = new BrowserWindow({
    frame: false,
    fullscreen: true
  });

  MainWindow.loadURL(require('url').format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  MainWindow.on('closed', () => {
    mainWindow = null;
  });

}


app.on('ready', function(){
    CreateWindow();
});
