class queueViaStacks {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(value) {
    this.inStack.push(value);
  }

  dequeue() {
    if (this.outStack.length !== 0) {
      return this.outStack.pop();
    } else {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
      return this.outStack.pop();
    }
  }
}

let queue = new queueViaStacks();
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(3);
queue.enqueue(7);
queue.enqueue(2);
queue.enqueue(2);
queue.enqueue(1);
console.log(queue)
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
queue.enqueue(1);
queue.enqueue(1);
queue.enqueue(1);
console.log(queue);
queue.dequeue();
console.log(queue);
