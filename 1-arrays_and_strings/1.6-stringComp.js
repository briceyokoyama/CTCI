function stringComp(str) {
  let count = 0;
  
  let newStr = "";
  
  for (let i = 0; i < str.length; i++) {
    newStr += str[i];
    count++;
    while (str[i] === str[i+1]) {
      count++;
      i++;
    }
    newStr += count;
    if (count > maxCount) {
      maxCount = count;
    }
    count = 0;
  }

  if (maxCount > 1) {
    return newStr;
  } else {
    return str;
  }
}

console.log(stringComp("aaaa"));
console.log(stringComp("abbba"));
console.log(stringComp("abbcccaddd"));
console.log(stringComp("bcdaaaabbbbhhh"));
console.log(stringComp(""));