// 160. Itersection of Two Linked Lists

// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
// For example, the following two linked lists begin to intersect at node c1:
// The test cases are generated such that there are no cycles anywhere in the entire linked structure.
// Note that the linked lists must retain their original structure after the function returns.
// Custom Judge:
// The inputs to the judge are given as follows (your program is not given these inputs):
// intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
// listA - The first linked list.
// listB - The second linked list.
// skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
// skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
// The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.

var getIntersectionNode = function(headA, headB) {
    let currA = headA;
    let currB = headB;
    let loops = 0;

    while (currA !== currB) {
        if (currA.next) {
            currA = currA.next;
        } else {
            currA = headB;
            loops++;
        };

        if (currB.next) {
            currB = currB.next;
        } else {
            currB = headA;
            loops++;
        };

        if (loops >= 3) {
            return null;
        };
    };

    return currA;
};

// Making binary tree here
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};

let node1 = new ListNode(4);
let node2 = new ListNode(1);

let node3 = new ListNode(5);
let node4 = new ListNode(6);
let node5 = new ListNode(1);

let node6 = new ListNode(8);
let node7 = new ListNode(4);
let node8 = new ListNode(5);

node1.next = node2;
node2.next = node6;

node3.next = node4;
node4.next = node5;
node5.next = node6;

node6.next = node7;
node7.next = node8;

// Test here
console.log(getIntersectionNode(node1, node3));
