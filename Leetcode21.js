// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(null);
    let tail = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        };

        tail = tail.next;
    };

    if (list1) {
        tail.next = list1;
    } else if (list2) {
        tail.next = list2;
    };

    return dummy.next;
};

// Making linked list here
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};

let aNode1 = new ListNode(1);
let aNode2 = new ListNode(2);
let aNode3 = new ListNode(3);

aNode1.next = aNode2;
aNode2.next = aNode3;

let bNode1 = new ListNode(1);
let bNode2 = new ListNode(2);
let bNode3 = new ListNode(3);

bNode1.next = bNode2;
bNode2.next = bNode3;

// Test here
console.log(mergeTwoLists(aNode1, bNode1));
