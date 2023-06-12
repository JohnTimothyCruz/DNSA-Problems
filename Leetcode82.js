// 82. Remove Duplicates from Sorted List II

// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

var deleteDuplicates = function(head) {
    let dummy = new ListNode(0, head)
    let curr = head
    let prev = dummy

    while (curr) {
        if (curr.next && curr.val === curr.next.val) {
            while (curr.next && curr.val === curr.next.val) {
                curr = curr.next
            }
            prev.next = curr.next
        } else {
            prev = curr
        }
        curr = curr.next
    }

    return dummy.next
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
let node3 = new ListNode(1);
let node4 = new ListNode(2);
let node5 = new ListNode(3);
let node6 = new ListNode(4);
let node7 = new ListNode(4);
let node8 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;

// Test here
console.log(deleteDuplicates(node1))
