function validateBST(root, min = null, max = null) {
  if (!root) return true;
  if (min !== null && root.value < min) return false;
  if (max !== null && root.value > max) return false;



  return (validateBST(root.left, min, root.value) && validateBST(root.right, root.value, max))
};

class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

let a = new TreeNode(1);
let b = new TreeNode(2);
let c = new TreeNode(3);
let d = new TreeNode(4);
let e = new TreeNode(5);
let f = new TreeNode(6);
let g = new TreeNode(7);
let h = new TreeNode(8);
let i = new TreeNode(9);
let j = new TreeNode(10);
let k = new TreeNode(11);
let l = new TreeNode(12);
let m = new TreeNode(13);
let n = new TreeNode(14);
let o = new TreeNode(15);

h.left = d;
h.right = l;
d.left = b;
d.right = f;
l.left = j;
l.right = n;
b.left = a;
b.right = c;
f.left = e;
f.right = g;
j.left = i;
j.right = k;
n.left = m;
n.right = o;

console.log(validateBST(h))