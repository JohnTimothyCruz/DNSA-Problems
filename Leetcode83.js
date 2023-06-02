// 83. Remove Duplicates from Sorted List

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

var deleteDuplicates = function(head) {
    let curr = head;
    let next = head?.next;

    while (next) {
        if (curr.val === next.val) {
            curr.next = next.next;
        } else {
            curr = curr.next;
        };
        next = curr.next;
    };

    return head;
};

// Making linked list here
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};

let node1 = new ListNode(1);
let node2 = new ListNode(1);
let node3 = new ListNode(2);

node1.next = node2;
node2.next = node3;

// Test here
console.log(deleteDuplicates(node1));
