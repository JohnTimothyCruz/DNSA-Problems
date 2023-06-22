// 234. Palindrome Linked List

// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    let prev;
    let temp;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    };

    prev = slow;
    slow = slow.next;
    prev.next = null;

    while (slow) {
        temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    };

    fast = head;
    slow = prev;

    while (slow) {
        if (fast.val !== slow.val) return false;
        fast = fast.next;
        slow = slow.next;
    };

    return true;
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
let node3 = new ListNode(2);
let node4 = new ListNode(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;

// Test here
console.log(isPalindrome(node1))
