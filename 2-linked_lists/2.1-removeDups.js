function removeDups(l1) {
  let values = {};

  let currNode = l1;
  let prev;

  while (currNode) {
    if (values[currNode.value]) {
      prev.next = currNode.next;
    } else {
      values[currNode.value] = true;
      prev = currNode;
    }
    currNode = currNode.next;
  }
  return l1;
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
let d = new Node(1);
let e = new Node(4);
let f = new Node(1);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
console.log(a.next.next.next);
removeDups(a);
console.log(a.next.next.next);