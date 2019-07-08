function palindromePerm(str) {
  let charHash = {};
  let char;
  for (let i = 0; i < str.length; i++) {
    char = str[i].toLowerCase();
    if (char === " ") continue;

    if (charHash[char]) {
      delete charHash[char];
    } else {
      charHash[char] = true;
    }
  }

  if (Object.keys(charHash).length < 2) {
    return true;
  } else {
    return false;
  }
}