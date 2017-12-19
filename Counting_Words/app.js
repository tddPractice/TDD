function countWords(sentence){
    var ix, ixLen, count = 1, preCount = false;

    sentence = sentence.trim();
    if(sentence.length > 1000000){
        return;
    }
    for(ix = 0, ixLen = sentence.length; ix < ixLen; ix++){
        if(sentence[ix] === '\u0020'){ // \u0020 : white space
            if(preCount === false){
                count++;
                preCount = true;
            }
        }else{
            preCount = false;
        }
    }
    return count;
}
