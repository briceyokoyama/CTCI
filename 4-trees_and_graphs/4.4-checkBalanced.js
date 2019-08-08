function checkBalanced(root) {
  if (getHeight(root)) return true;
  return false;
}

function getHeight(root) {
  if (root === null) return -1;

  let left = getHeight(root.left);
  let right = getHeight(root.right);

  if (left === false || right === false) return false;

  if (Math.abs(left - right) > 1) return false;

  return Math.max(left, right) + 1;
}


class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

let a = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');
let g = new TreeNode('g');
let h = new TreeNode('h');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
e.left = h;

console.log(checkBalanced(a))