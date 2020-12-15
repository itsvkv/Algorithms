class StackNode {
  val = null;
  next = null;
  constructor(val) {
    this.val = val;
  }
}
class Stack {
  head;
  length = 0;
  constructor() {
  }
  push(val) {
    let node = new StackNode(val);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }
  pop() {
    if (this.length == 0) {
      return null;
    }
    let removingNOde = this.head;
    this.length--;
    this.head = this.head.next;
    removingNOde.next = null;
    return removingNOde;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(JSON.stringify(stack, null, 2));
