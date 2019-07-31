function deleteMidNode(node) {

  if (!node || !node.next) return false;

  let next = node.next;

  node.value = next.value
  node.next = next.next;
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
let f = new Node(6);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log(deleteMidNode(d));
console.log(b.next)