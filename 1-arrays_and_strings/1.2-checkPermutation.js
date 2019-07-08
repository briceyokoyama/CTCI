function checkPermutation(str1, str2) {
  
  if (str1.length !== str2.length) {
    return false;
  }
  
  let charHash = {};
  let char;

  for(let i = 0; i < str1.length; i++) {
    char = str1[i];
    charHash[char] = charHash[char] + 1 || 1;
  }

  for(let i = 0; i < str2.length; i++) {
    char = str2[i];
    if (charHash[char]) {
      charHash[char] = charHash[char] - 1;
      if (charHash[char] === 0) {
        delete charHash[char]
      }
    } else {
      return false;
    }
  }

  if (Object.keys(charHash).length === 0) {
    return true;
  }
  return false;

}