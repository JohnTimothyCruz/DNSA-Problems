// 19. Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

var removeNthFromEnd = function(head, n) {
    let curr1 = head
    let curr2 = head

    for (let i = 0; i < n; i++) {
        curr2 = curr2.next
    }

    if (!curr2) {
        return head.next
    }

    while (curr2.next) {
        curr1 = curr1.next
        curr2 = curr2.next
    }

    curr1.next = curr1.next.next

    return head
};

// Making linked list here
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Test here
console.log(removeNthFromEnd(node1, 2))
