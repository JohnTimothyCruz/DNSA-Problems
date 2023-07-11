// 232. Implement Queue using Stacks

// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
// Implement the MyQueue class:
// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:
// You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

// ES5 Syntax
// var MyQueue = function() {
//     this.stackOne = [];
//     this.stackTwo = [];
// };

// MyQueue.prototype.push = function(x) {
//     this.stackOne.push(x);
// };

// MyQueue.prototype.pop = function() {
//     if (!this.stackTwo.length) {
//         while (this.stackOne.length) this.stackTwo.push(this.stackOne.pop());
//     };
//     return this.stackTwo.pop();
// };

// MyQueue.prototype.peek = function() {
//     if (this.stackTwo.length) return this.stackTwo[this.stackTwo.length - 1];
//     return this.stackOne[0];
// };

// MyQueue.prototype.empty = function() {
//     return this.stackOne.length === 0 && this.stackTwo.length === 0;
// };

// MyQueue.prototype._prepare = function() {
//     if (this.stackTwo.length) {
//         while (this.firstStack.length > 0) {
//             this.secondStack.push(this.firstStack.pop());
//         };
//     };
// };

// ES6 Syntax
class MyQueue {
    constructor() {
        this.stackOne = [];
        this.stackTwo = [];
    };

    push(x) {
        this.stackOne.push(x)
    };

    pop() {
        this._prepare();
        return this.stackTwo.pop();
    };

    peek() {
        this._prepare();
        return this.stackTwo[this.stackTwo.length - 1]
    };

    empty() {
        return this.stackOne.length === 0 && this.stackTwo.length === 0;
    };

    _prepare() {
        if (!this.stackTwo.length) {
            while (this.stackOne.length) this.stackTwo.push(this.stackOne.pop());
        };
    };
};

let obj = new MyQueue()
console.log(obj.push(1)) // Returns undefined
console.log(obj.push(2)) // Returns undefined
console.log(obj.peek()) // Returns 1
console.log(obj.pop()) // Returns 1
console.log(obj.empty()) // Returns false
