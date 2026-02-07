import { BinarySearchTree, BinarySearchNode } from "./BinarySearchTree";

export class DepthFirstPostOrder {
    tree: BinarySearchTree;
    data: any[] = [];
    constructor(_tree: BinarySearchTree) {
        this.tree = _tree;
    }

    getResult() {
        var current = this.tree.root;
        this.traverse(current);
        return this.data;
    }

    traverse(node: BinarySearchNode) {

        if (node.left) {
            this.traverse(node.left)
        }
        if (node.right) {
            this.traverse(node.right)
        }
        this.data.push(node.val);

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

var dfpreo = new DepthFirstPostOrder(bst);
console.log(dfpreo.getResult())