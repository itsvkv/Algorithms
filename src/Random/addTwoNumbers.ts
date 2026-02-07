
//Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    var first = "";
    var second = "";
    while (true) {
        first = l1.val + first;
        if (!l1.next) {
            break;
        }
        l1 = l1.next;
    }
    while (true) {
        second = l2.val + second;
        if (!l2.next) {
            break;
        }
        l2 = l2.next;
    }

    var result = Number(first) + Number(second);
    console.log("result" + result)
    return result.toString().split('').reduceRight((p, c) => {
        if (p.val == undefined) {
            p.val = Number(c);
        }
        else
            p.next = new ListNode(Number(c))
        return p
    }, new ListNode())
};
let l1 = [2, 4, 3], l2 = [5, 6, 4]

var linkedl1 = new ListNode(l1.shift());
var linked2 = new ListNode(l2.shift());
for (var num in l1) {

}
addTwoNumbers(
    l1.reduce((p, c) => {
        if (p.val == undefined) {
            p.val = Number(c);
        }
        else
            p.next = new ListNode(c)
        return p
    }, new ListNode(l1.shift())),
    l2.reduce((p, c) => {
        if (p.val == undefined) {
            p.val = Number(c);
        }
        else
            p.next = new ListNode(c)
        return p
    }, new ListNode(l2.shift())),

)