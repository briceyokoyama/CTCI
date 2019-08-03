function intersection(l1, l2) {

  if (!l1 || !l2) return null;

  let l1Length = 0;
  let l2Length = 0;

  let currNode = l1;

  while (currNode.next) {
    l1Length++;
    currNode = currNode.next;
  }

  let l1Tail = currNode;
  currNode = l2;

  while (currNode.next) {
    l2Length++;
    currNode = currNode.next;
  }

  let l2Tail = currNode;
  if (l1Tail !== l2Tail) return null;

  if (l1Length > l2Length) {
    for (let i = 0; i < l1Length - l2Length; i++) {
      l1 = l1.next;
    }
  } else {
    for (let i = 0; i < l2Length - l1Length; i++) {
      l2 = l2.next;
    }
  }

  while (l1 !== l2) {
    l1 = l1.next;
    l2 = l2.next;
  }

  return l1;

}

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
let g = new Node("g");
let h = new Node("h");
let i = new Node("i");
a.next = b;
b.next = c;
c.next = d;
d.next = g;
e.next = f;
f.next = g;
g.next = h;
h.next = i;

console.log(intersection(a, e));