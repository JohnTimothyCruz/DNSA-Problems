// 1290. Convert Binary Number in a Linked List to Integer

// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.
// Return the decimal value of the number in the linked list.
// The most significant bit is at the head of the linked list.

var getDecimalValue = function(head) {
    let res = 0;

    while (head) {
        res = (res * 2) + head.val;
        head = head.next;
    };

    return res;
};

// Making linked list here
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};

let node1 = new ListNode(1);
let node2 = new ListNode(0);
let node3 = new ListNode(1);

node1.next = node2;
node2.next = node3;

// Test here
console.log(getDecimalValue(node1))
