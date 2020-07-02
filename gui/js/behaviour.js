const remote = require('electron').remote;
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const db = low(adapter)

const uuid = require('uuid')
 
// Initiallizing playlist in DataBase
db.defaults({ PlayLists: [] })
  .write()



//gloabal variables to manage Playlists

var toBeAddedPaths;

// global variable ends

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



// functional contents

async function addplaylist_browse(){
    const { dialog } = require('electron').remote;
    selections = dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'], filters: [
        { name: 'Audio Files', extensions: ['mp3', 'ogg', 'MP3','OGG', 'wav', 'WAV'] },
      ]
     });
    var resolvedSelections = Promise.resolve(selections);
    toBeAddedPaths = await resolvedSelections.then((path)=>{
        paths = path.filePaths;
        totalFilesSelected = paths.length;
        document.getElementById('noofsel').innerHTML = totalFilesSelected;
        return paths;
    })
}

function addPlaylistToDB() {
    var playName = document.getElementById('playlistnametoadd').value;
    readyList = {};
    currentList = [];
    for(x = 0; x < toBeAddedPaths.length; x++){
        formattedPath = {'id':uuid.v4() , 'path':toBeAddedPaths[x]};
        currentList.push(formattedPath);
    }
    readyList[playName] = currentList;
    db.get('PlayLists').push(readyList).write();
}


