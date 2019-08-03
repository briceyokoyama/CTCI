function sumLists(l1, l2) {
  let carry = 0;
  let holder = new Node();
  let newNode = holder;

  while (l1 || l2 || carry) {
    const val1 = l1 ? l1.value : 0;
    const val2 = l2 ? l2.value : 0;
    const value = val1 + val2 + carry;

    newNode.next = new Node(value%10);
    newNode = newNode.next;

    if (value > 9) {
      carry = 1;
    } else {
      carry = 0;
    }

    l1 = l1&&l1.next
    l2 = l2&&l2.next
  }

  return holder.next;
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

e.next = f;
f.next = g;
g.next = h;
h.next = i;

console.log(sumLists(a, e));