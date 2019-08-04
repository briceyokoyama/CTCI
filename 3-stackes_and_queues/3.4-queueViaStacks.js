class queueViaStacks {
  constructor() {
    this.inStack = [];
    this.outStack = [];
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.inStack.push(newNode);
  }

  dequeue() {

    if (this.inStack.length === 0 && this.outStack.length === 0) return null;

    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
    let removed = this.first;
    this.first = this.first.next;
    removed.next = null;
    return this.outStack.pop();
  }

  isEmpty() {
    return (this.inStack.length === 0 && this.outStack.length === 0)
  }

  peek() {
    return this.first.value;
  }

}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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
