const electron = require('electron');
const {app, Menu, Tray} = electron;
const {BrowserWindow} = electron;

app.on('windows-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

let createWindow = (load_url) => {
    let win;

    // Instantiate BrowserWindow with options
    win = new BrowserWindow({
        width:600,
        height:600,
        maxWidth:600,
        maxHeight:600,
        minWidth:300,
        minHeight:300,
        fullscreenable:false,
        maximizable:false,
        title: "Relay",
        icon: `${__dirname}/../_assets/release/images/icon.png`
    });

    // Load URL
    win.loadURL(`http://localhost:${port}`);

    // Disable window menu
    // win.setMenu(null);

    // Open the DevTools.
    win.webContents.openDevTools();

    // Remove window var when closed
    win.on('closed', () => {
        win = null;
    });
};

app.on('ready', createWindow);

module.exports = {
    createWindow: createWindow
};
