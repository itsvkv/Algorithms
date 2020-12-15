class BinarySearchNode {
  val;
  left = null;
  right = null;
  constructor(value) {
    this.val = value;
  }
}

class BinarySearchTree {
  root: BinarySearchNode = null;
  constructor() {
  }

  insert(val) {
    let newNode = new BinarySearchNode(val);
    if (this.root == null) {
      this.root = newNode;
      return this;
    }
    if (this.root.left == null && val < this.root.val) {
      this.root.left = newNode;
      return this;
    }
    if (this.root.right == null && val > this.root.val) {
      this.root.right = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      if (val < current.val) {
        if (current.left !== null) {
          current = current.left;
          continue;
        } else {
          current.left = newNode;
          return this;
        }
      }
      if (val > current.val) {
        if (current.right != null) {
          current = current.right;
          continue;
        } else {
          current.right = newNode;
          return this;
        }
      }
    }
  }
}
