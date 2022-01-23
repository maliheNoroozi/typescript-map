"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    get length() {
        if (!this.head) {
            return 0;
        }
        let length = 0;
        let tail = this.head;
        while (tail) {
            length++;
            tail = tail.next;
        }
        return length;
    }
    at(index) {
        if (!this.head) {
            throw new Error('Empty linked list.');
        }
        let counter = 0;
        let tail = this.head;
        while (tail) {
            if (counter === index) {
                return tail;
            }
            counter++;
            tail = tail.next;
        }
        throw new Error('Index is out of boundry');
    }
    compare(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        return leftNode.data > rightNode.data;
    }
    swap(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const temp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = temp;
    }
    print() {
        if (!this.head) {
            console.log('Empty linked list.');
            return;
        }
        let tail = this.head;
        while (tail) {
            console.log(tail.data);
            tail = tail.next;
        }
    }
}
exports.LinkedList = LinkedList;
