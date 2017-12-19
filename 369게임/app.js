function game(n){
    var returnVal, n;
    var ix, ixLen, cmp;

    returnVal = '', n = '' + n;

    for(ix = 0, ixLen = n.length; ix < ixLen; ix++){
        cmp = n[ix];
        if(cmp === '3' || cmp === '6' || cmp === '9'){
            returnVal += '짝';
        }
    }

    if(returnVal.length > 0){
        return returnVal;
    }else{
        return n;
    }
}