var first;
var flag = true;

function init(first){
    window.first = first;
    return c(7);
}

function c(n){
    var returnVal;

    if(!flag){
        return;
    }
    if(n === 1){
        return window.first;
    }

    if(n > 1 && c(n-1) % 2 === 0){
        returnVal = c(n-1) / 2;
    }else{
        returnVal = 3 * c(n-1) + 1;
    }

    if(returnVal === 1){
        window.flag = true;
        return n;
    }
    return returnVal;
}

init(26);