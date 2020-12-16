import { BinarySearchTree, BinarySearchNode } from "./BinarySearchTree";

class BreadthFirstSearch {
    tree: BinarySearchTree;
    queue: BinarySearchNode[] = [];
    data: any[] = [];
    constructor(_tree: BinarySearchTree) {
        this.tree = _tree;
    }

    getResult() {
        this.queue.push(this.tree.root);
        while (this.queue.length) {
            var current = this.queue.shift();

            this.data.push(current.val);

            if (current.left) this.queue.push(current.left)
            if (current.right) this.queue.push(current.right)
        }
        return this.data;
    }
}

var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(14);
bst.insert(22);
bst.insert(12)
bst.insert(18)
bst.insert(8)
bst.insert(13)
bst.insert(25)
bst.insert(21)
console.log(JSON.stringify(bst, null, 2))
var BFS = new BreadthFirstSearch(bst);
console.log(BFS.getResult())