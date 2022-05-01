const { app, BrowserWindow, Menu, ipcMain, ipcRenderer } = require("electron");

// Build new BrowserWindoe
function createWindow() {
    const loginWindow = new BrowserWindow({
        width: 1000,
        height: 455,
        frame: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            worldSafeExecuteJavaScript: true,
            // preload: path.join(__dirname, 'preload.js')
        }
    })

    loginWindow.loadFile("./src/html/login.html");

  /*
    const template = [
    {
      label: "Help",
      submenu: [
        {
          label: "About",
          click: async () => {
            const aboutWindow = new BrowserWindow({
              width: 400,
              height: 200,
              parent: mainWindow,
              modal: true,
              autoHideMenuBar: true,
              webPreferences: {
                  nodeIntegration: true,
                  contextIsolation: false,
                  worldSafeExecuteJavaScript: true,
                  // preload: path.join(__dirname, 'preload.js')
              }
            })
            aboutWindow.loadFile("./src/html/about.html");
          }
        }
      ]
    }
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
  */

  // Open the DevTools.
  loginWindow.webContents.openDevTools()
}

// If the app initialized and ready, then execute function "createWindow"
app.whenReady().then(createWindow);

// Build a listener for the app. Listen, if app have open a BrowserWindow.
app.on("window-all-closed", () => {
    app.quit();
})

app.on("activate", () => {
    if (BrowserWindow.getAllWindows(). length === 0) {
        createWindow();
    }
})