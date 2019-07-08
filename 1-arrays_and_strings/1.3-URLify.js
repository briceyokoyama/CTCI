function URLify(str1, length) {

  let str2 = "";
  
  for(let i = 0; i < length; i++) {
    if (str1[i] === " ") {
      str2 += "%20";
    } else {
      str2 += str1[i]
    }
  }
  return str2;
}