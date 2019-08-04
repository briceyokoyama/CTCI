function sortStack(stack) {
  let stack2 = new Stack();

  while(!stack.isEmpty()) {
    let temp = stack.pop();

    while (!stack2.isEmpty() && stack2.peek() > temp) {
      stack.push(stack2.pop());
    }
    stack2.push(temp);
  }

  while (!stack2.isEmpty()) {
    stack.push(stack2.pop())
  }
  return stack;
}

class Stack {
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

let stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(3);
stack.push(7);
stack.push(2);
stack.push(2);
stack.push(1);
sortStack(stack)
console.log(stack);
