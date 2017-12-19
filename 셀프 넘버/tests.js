function d(n){
    var ix, ixLen, consNum;
    var n = '' + n;

    consNum = +n;
    for(ix = 0, ixLen = n.length; ix < ixLen; ix++){
        consNum += (+n[ix]);
    }
    consList[consNum - 1] = +n;
    return consNum;
}

function init(){
    var ix, ixLen, consList = [];

    for(ix = 0, ixLen = 10000; ix < ixLen; ix++){
        consList[ix] = new Array();
    }
    return consList;
}

var ix, ixLen, consList;
consList = init();

for(ix = 1, ixLen = 10001; ix < ixLen; ix++){
    d(ix);
}

for(ix = 0, ixLen = 10000; ix < ixLen; ix++){
    if(consList[ix].length === 0){
        console.log(ix + 1);
    }
}
