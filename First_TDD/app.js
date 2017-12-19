function print(n){
  var ix, ixLen, returnValue = '';

  for(ix = 0, ixLen = n; ix < ixLen; ix++){
    returnValue += '★';
  }

  return returnValue;
}
