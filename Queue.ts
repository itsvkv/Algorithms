class QueueNode {
  val;
  next;
  constructor(val) {
    this.val = val;
  }
}

class Queue {
  length = 0;
  head;
  tail;

  push(val) {
    var newNode = new QueueNode(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return ++this.length;
  }
  pop() {
    if (this.length == 0) {
      return null;
    }
    var removingNode = this.head;
    this.head = this.head.next;
    removingNode.next = null;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return removingNode;
  }
}

let queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(JSON.stringify(queue, null, 2));
