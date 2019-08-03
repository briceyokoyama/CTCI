function palindrome(l1) {
  let stack = [];
  let currNode = l1;

  while (currNode) {
    stack.push(currNode.value)
    currNode = currNode.next;
  }

  let length = stack.length;
  currNode = l1;

  for (let i = 0; i < length / 2; i++) {
    if (currNode.value !== stack.pop()) return false;
    currNode = currNode.next;
  }

  return true;
}

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);
let f = new Node(4);
let g = new Node(3);
let h = new Node(2);
let i = new Node(3);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;

console.log(palindrome(a));