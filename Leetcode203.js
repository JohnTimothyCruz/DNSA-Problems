// 203. Remove Linked List Elements

// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

var removeElements = function(head, val) {
    let dummy = new ListNode(null, head)
    let prev = dummy
    let curr = head

    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next
        } else {
            prev = prev.next
        }
        curr = curr.next
    }

    return dummy.next
};

// Making linked list here
class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next || null;
    };
};

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(6);
let node4 = new ListNode(3);
let node5 = new ListNode(4);
let node6 = new ListNode(5);
let node7 = new ListNode(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

// Test here
console.log(removeElements(node1, 6))
