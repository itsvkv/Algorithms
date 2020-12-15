class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (this.length == 0) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;

    let pre, current = this.head;
    pre = current;
    while (current.next) {
      pre = current;
      current = current.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = this.tail = undefined;
      this.length = 0;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = temp.next;
    this.length--;
    if (this.length == 0) this.tail = null;
    return temp;
  }
  unShift(val) {
    var newHead = new Node(val);

    if (!this.tail) this.tail = newHead;
    else newHead.next = this.head;

    this.head = newHead;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let currentIndex = 0;
    let element = this.head;
    while (currentIndex < index) {
      element = element.next;
      currentIndex++;
    }
    return element;
  }
  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.value = val;
    }
    return null;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return null;
    }
    if (index == 0) {
      this.unShift(val);
      return true;
    }
    if (index == this.length) {
      this.push(val);
      return true;
    }
    let element = new Node(val);
    let previousElement = this.get(index - 1);
    element.next = previousElement.next;
    previousElement.next = element;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();

    let previousElement = this.get(index - 1);
    let nextElement = this.get(index + 1);
    previousElement.next = nextElement;
    this.length--;
    return true;
  }
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}

var list = new SinglyLinkedList();

list.push(0);
list.push(1);
list.push(2);
list.push(4);
list.insert(3, 3);
list.remove(4);
list.push(1);
list.reverse();
console.log(JSON.stringify(list, null, 2));
