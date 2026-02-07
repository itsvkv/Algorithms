import { BinarySearchTree, BinarySearchNode } from "./BinarySearchTree";

export class DepthFirstPreOrder {
    tree: BinarySearchTree;
    data: any[] = [];
    constructor(_tree: BinarySearchTree) {
        this.tree = _tree;
    }

    getResult() {
        var current = this.tree.root;
        this.parseNode(current);
        return this.data;
    }

    parseNode(node: BinarySearchNode) {
        this.data.push(node.val);
        if (node.left) {
            this.parseNode(node.left)
        }
        if (node.right) {
            this.parseNode(node.right)
        }
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

var dfpreo = new DepthFirstPreOrder(bst);
console.log(dfpreo.getResult())