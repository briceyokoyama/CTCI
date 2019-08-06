function minimalTree(arr) {

  if (arr.length === 0 ) return null;

  let midIdx = Math.floor(arr.length / 2);

  let node = new Node(arr[midIdx]);
  let left = arr.slice(0, midIdx);
  let right = arr.slice(midIdx + 1);

  node.left = minimalTree(left);
  node.right = minimalTree(right);
  
  return node;

}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
console.log(minimalTree(arr));
console.log("------");
console.log(minimalTree(arr).left);
console.log("------");
console.log(minimalTree(arr).right);