function partition(head, val) {

  let p1 = head;
  let leftStart;
  let leftEnd;
  let rightStart;
  let rightEnd;

  while (p1) {

    if (p1.value < val) {
      if (!leftStart) {
        leftStart = p1;
        leftEnd = p1;
      } else {
        leftEnd.next = p1;
        leftEnd = p1;
      }
      p1 = p1.next;
    } else if (p1.value > val) {
      if (!rightStart) {
        rightStart = p1;
        rightEnd = p1;
      } else {
        rightEnd.next = p1;
        rightEnd = p1;
      }
      p1 = p1.next;
    } else {
      if (!rightStart) {
        rightStart = p1;
        rightEnd = p1;
      } else {
        let temp = p1
        p1 = p1.next;
        temp.next = rightStart;
        rightStart = temp;
      }
    }
  }

  leftEnd.next = rightStart;

  return leftStart;

}

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

let a = new Node(7);
let b = new Node(3);
let c = new Node(4);
let d = new Node(1);
let e = new Node(9);
let f = new Node(2);
let g = new Node(5);
let h = new Node(4);
let i = new Node(2);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;

console.log(partition(a, 3).next.next.next);
