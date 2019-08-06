function listOfDepths(root) {
  let nextQueue = [root]
  let linkedLists = new Array();

  while (nextQueue.length > 0) {
    let queue = nextQueue.slice();
    nextQueue = new Array();
    let preHead = new Node();
    let currNode = preHead;

    while(queue.length > 0) {
      let treeNode = queue.shift();
      let newNode = new Node(treeNode.value);
      currNode.next = newNode;
      currNode = newNode;
      if (treeNode.left) nextQueue.push(treeNode.left);
      if (treeNode.right) nextQueue.push(treeNode.right);
    }
    linkedLists.push(preHead.next);
  }
  return linkedLists;
}

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
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

console.log(listOfDepths(a))