function isUnique(str) {
  let charHash = {};

  for (let i = 0; i < str.length; i++) {
    if (charHash[str[i]]) {
      return false;
    }
    charHash[str[i]] = true;
  }
  return true;
}

// no additional data structures

function isUnique1(str) {
  
  for (let i = 0; i < str.length; i++) {
    for (let j = i+1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}


console.log(isUnique("aa"));
console.log(isUnique("abcsdefghijklmnop"));
console.log(isUnique("abcsdefghijklmnopa"));