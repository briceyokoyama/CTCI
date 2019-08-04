function loopDetection(l1) {
  let p1 = l1;
  let p2 = l1;

  while (p1 && p1.next) {
    p1 = p1.next.next;
    p2 = p2.next;

    if (p1 === p2) break;
  }

  if (p1 === null || p1.next === null) {
    return null;
  }

  p1 = l1;

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
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
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;
i.next = g;

console.log(loopDetection(a));