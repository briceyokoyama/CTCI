function kthToLast(l1, k) {

  if (k < 1) return null;

  let p1 = l1;
  let p2 = l1;
  let count = 0;

  while (p1) {
    if (count >= k) p2 = p2.next;
    p1 = p1.next;
    count++;
  }

  if (count < k) return null;
  return p2;
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

console.log(kthToLast(a, 6));
