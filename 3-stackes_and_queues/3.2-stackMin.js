class stackMin {
  constructor() {
    this.stack = [];
    this.minStack = [];
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);

    if (this.top) {
      newNode.next = this.top;
    }
    this.top = newNode;
    this.stack.push(newNode);

    if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1].value) {
      this.minStack.push(newNode);
    }

    return this.stack.length;
  }

  pop() {
    let removed = this.stack.pop();

    if (this.minStack[this.minStack.length - 1].value === removed.value) {
      this.minStack.pop();
    }

    return removed.value;
  }

  min() {
    return this.minStack[this.minStack.length - 1].value;
  }

  peek() {
    return this.top.value;
  }

  isEmpty() {
    return this.stack.length === 0
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let stack = new stackMin();
stack.push(5);
stack.push(10);
stack.push(3);
stack.push(7);
stack.push(2);
stack.push(2);
stack.push(1);
console.log(stack.min());
stack.pop();
console.log(stack.min());
stack.pop();
console.log(stack.min());
stack.pop();
console.log(stack.min());
stack.pop();
console.log(stack.min());
stack.pop();
console.log(stack.min());
stack.pop();
console.log(stack.min());