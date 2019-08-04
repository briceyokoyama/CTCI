class stackOfPlates {
  constructor(capacity) {
    this.stacks = [];
    this.capacity = capacity;
  }

  push(value) {

    if (this.stacks.length === 0) {
      this.stacks.push([]);
    }
    let stack = this.stacks[this.stacks.length - 1];

    if (stack.length < this.capacity) {
      stack.push(value);
    } else {
      stack = new Array();
      stack.push(value);
      this.stacks.push(stack)
    }

    console.log(this.stacks);

    return this.stacks.reduce((sum, stack) => sum + stack.length, 0)
  }

  pop() {
    let stack = this.stacks[this.stacks.length - 1];
    let val = stack.pop();

    if (stack.length === 0) this.stacks.pop();
    console.log(this.stacks);
    return val;
  }

  popAt(idx) {
    if (!this.stacks[idx]) return null;

    let stack = this.stacks[idx];
    let val = stack.pop();

    if (stack.length === 0) this.stacks.splice(idx, 1);
    console.log(this.stacks);
    return val;
  }
}


let stack = new stackOfPlates(2);
stack.push(5);
stack.push(10);
stack.push(3);
stack.push(7);
stack.push(2);
stack.push(2);
stack.push(1);
stack.popAt(0);
stack.popAt(0);
stack.popAt(1);
stack.pop();
stack.pop();
stack.pop();
stack.push(4);
