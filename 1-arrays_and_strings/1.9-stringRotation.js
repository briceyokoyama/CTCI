function stringRotation(s1, s2) {
  let check = s1[s1.length - 1] + s1[0];
  let index;

  for (let i = s2.length - 2; i >= 0; i--) {
    if (s2[i] + s2[i + 1] === check) {
      index = i + 1;
      break;
    }
  }

  if (s2.slice(index) + s2.slice(0, index) === s1) {
    return true;
  }

  return false;

}

console.log(stringRotation("waterbottle", "erbotlewat"));
console.log(stringRotation("waterbottle", "erbottlewat"));