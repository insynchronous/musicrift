const remote = require('electron').remote;

function closewindow(){
    var window = remote.getCurrentWindow();
    window.close();
}

function minimizewindow(){
    var window = remote.getCurrentWindow();
    window.minimize();
}