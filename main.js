const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let win

function createWindow() {
  win = new BrowserWindow({
       width: 800, 
       height: 600,
       webPreferences: {
        nodeIntegration: true
      }
});
win.loadFile('index.html')
//    pathname: path.join(__dirname, 'index.html'),
//        win.loadURL(url.format ({
//       protocol:'file:',
//       slashes:true
      
   //}))
}


app.on('ready',createWindow)











