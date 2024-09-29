
cef.emit('target:start');

let id_player = -1;

cef.on("target:infoplayer", (name, id_players) =>{ 
    id_player = id_players;
    document.getElementById('name').innerHTML = name;
});

/*document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyZ') {
        cef.hide(true);
        cef.set_focus(false);
    }
  });*/
function ButtonSelect(event) 
{
    let ev = event;
    switch(ev)
    {
        case 0: 
        { 
            cef.emit('pool:inter', 1, id_player);
            break; 
        }
        case 1: 
        { 
            cef.emit('pool:inter', 2, id_player);
            break; 
        }
        case 2: { 
            cef.emit('pool:inter', 3, id_player);
            break; 
        }
        case 3: { 
            cef.emit('pool:inter', 4, id_player);
            break; 
        }
        case 4: { 
            cef.emit('pool:inter', 5, id_player);
            break; 
        }
        case 5: 
        { 
            cef.emit('pool:inter', 6, id_player);
            break; 
        }
        case 6: 
        { 
            cef.emit('pool:inter', 7, id_player);
            break; 
        }
        case 7: 
        { 
            cef.emit('pool:inter', 8, id_player);
            break; 
        }
    }
}