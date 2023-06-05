// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let currRes = dummy;

    let carry = 0;
    while (l1 || l2 || carry) {
        let sum = carry;

        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        };

        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        };

        if (sum >= 10) {
            sum -= 10;
            carry = 1;
        } else {
            carry = 0;
        };

        currRes.next = new ListNode(sum);
        currRes = currRes.next;
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

let node1 = new ListNode(2);
let node2 = new ListNode(4);
let node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

let node4 = new ListNode(5);
let node5 = new ListNode(6);
let node6 = new ListNode(4);

node4.next = node5;
node5.next = node6;

// Test here
console.log(addTwoNumbers(node1, node4));
