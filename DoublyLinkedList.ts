class Nodee {
  prev = null;
  next = null;
  val = null;
  constructor(value) {
    this.val = value;
  }
}

class DoublyLinkedList {
  head = null;
  tail = null;
  length = 0;
  constructor() {
  }

  push(val) {
    let node = new Nodee(val);
    if (this.length == 0) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length == 0) {
      return false;
    }

    let oldTail = this.tail;
    if (this.length == 1) {
      this.head = this.tail = null;
    } else {
      let newTail = this.tail.prev;
      newTail.next = null;
      this.tail = newTail;
      oldTail.prev = null;
    }

    this.length--;
    return oldTail;
  }
  unshift(val) {
    if (this.length == 0) {
      return this.push(val);
    }
    let oldHead = this.head;
    let node = new Nodee(val);
    oldHead.prev = node;
    node.next = oldHead;
    this.head = node;
    this.length++;
    return node;
  }

  shift() {
    if (!this.length) return undefined;
    let oldHead = this.head;
    if (this.length == 1) {
      this.head = this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  get(index) {
    if (index >= this.length || index < 0) return undefined;
    let current;
    let count;
    if (index > this.length / 2) {
      count = this.length - 1;
      current = this.tail;

      while (count != index) {
        current = current.prev;
        count--;
      }
    } else {
      count = 0;
      current = this.head;

      while (count != index) {
        current = current.next;
        count++;
      }
    }
    return current;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return null;
    }

    if (index == 0) {
      return this.unshift(value);
    }
    if (index == this.length) {
      return this.push(value);
    }

    let nodeAtPrevIndex = this.get(index - 1);
    let node = new Nodee(value);
    let nextNode = nodeAtPrevIndex.next;
    nodeAtPrevIndex.next = nextNode.prev = node;
    node.next = nextNode;
    node.prev = nodeAtPrevIndex;
    this.length++;
    return node;
  }
  set(index, value) {
    let nodeAtIndex = this.get(index);
    if (nodeAtIndex) {
      nodeAtIndex.val = value;
    }
    return nodeAtIndex;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();

    let removingNode = this.get(index);
    let nextNode = removingNode.next;
    let prevNode = removingNode.prev;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removingNode.next = removingNode.prev = null;
    this.length--;
    return removingNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.prev = next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
console.log(list);
