function oneAway(str1, str2) {
  
  if (Math.abs(str1.length - str2.length > 1)) return false;

  let shorter;
  let longer;

  if (str1.length > str2.length) {
    shorter = str2;
    longer = str1;
  } else {
    shorter = str1;
    longer = str2;
  }

  let difference = false;
  let i = 0;
  let j = 0;

  while(i < shorter.length && j < longer.length) {
    if (shorter[i] !== longer[j]) {
      if (difference) {
        return false;
      }
      difference = true;

      if (shorter.length !== longer.length) {
        j++;
      } else {
        i++;
        j++;
      }
    } else {
      i++;
      j++
    }
  }
  return true;
}

console.log(oneAway('pale', 'ple'))
console.log(oneAway('pale', 'pales'))
console.log(oneAway('pale', 'bale'))
console.log(oneAway("bake", "pale"))