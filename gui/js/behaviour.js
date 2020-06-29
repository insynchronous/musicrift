const remote = require('electron').remote;

function closewindow(){
    var window = remote.getCurrentWindow();
    window.close();
}

function minimizewindow(){
    var window = remote.getCurrentWindow();
    window.minimize();
}

function changeactive(btnvalue) {
    ids = ['homebtn','streambtn','settingsbtn','playlistbtn'];
    value = btnvalue;
    ids.forEach(element => {
        document.getElementById(element).classList.remove('navactive');
    });
    document.getElementById(value).classList.add('navactive');
}

function volumedisptoggle(){
    if(document.getElementById('vol_ctrl').classList.contains('hider')){
        document.getElementById('vol_ctrl').classList.remove('hider')
    }
    else{
        document.getElementById('vol_ctrl').classList.add('hider')
    }
    
}


