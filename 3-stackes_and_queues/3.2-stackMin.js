class stackMin {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    this.stack.push(value);

    if (this.minStack.length === 0 || value < this.minStack[this.minStack.length - 1]) {
      this.minStack.push(value);
    } else {
      this.minStack.push(this.minStack[this.minStack.length - 1]);
    }

    return this.stack.length;
  }

  pop() {
    let val = this.stack.pop();
    this.minStack.pop();

    return val;
  }

  min() {
    return this.minStack[this.minStack.length - 1];
  }
}

let stack = new stackMin();
stack.push(5);
stack.push(10);
stack.push(3);
stack.push(7);
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