const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

function createWindow() {

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
}

function Login() {
    var x = document.forms["login"]["user"].value
    if (x == "") {
        alert("hmm... deu errado")
    }
    else {
        alert(x)
    }
}

app.whenReady().then(createWindow)