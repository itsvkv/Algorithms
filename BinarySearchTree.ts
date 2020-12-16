export class BinarySearchNode {
  val;
  left = null;
  right = null;
  constructor(value) {
    this.val = value;
  }
}

export class BinarySearchTree {
  root: BinarySearchNode = null;
  constructor() {
  }

  insert(val) {
    let newNode = new BinarySearchNode(val);
    if (this.root == null) {
      this.root = newNode;
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

  find(val) {
    if (this.root == null) {
      return -1;
    }

    var current = this.root;
    while (current) {
      if (current.val == val) {
        return true;
      }
      if (val < current.val) {
        current = current.left;
      }
      if (val > current.val) {
        current = current.right;
      }
    }
    return false;
  }
}

var bst = new BinarySearchTree();
bst.insert(10);
bst.insert(1);
bst.insert(0);
bst.insert(-1)
bst.insert(0.5)
console.log(bst.find(0));

