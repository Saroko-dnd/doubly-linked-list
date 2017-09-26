const Node = require('./node');

class LinkedList {
    constructor() {
        this.clear();
    }

    append(data) {
        if(this.length){
            this._tail.next = new Node(data, this._tail, null);
            this._tail = this._tail.next;
        }else{
            this._tail = new Node(data);
            this._head = this._tail;
        }
        this.length += 1;
    }

    head() {
        return (this.length) ? this._head.data : null;
    }

    tail() {
        return (this.length) ? this._tail.data : null;
    }

    at(index) {
        return this._findNode(index).data;
    }

    insertAt(index, data) {
        let foundNode = this._findNode(index);
        const newNode = new Node(data, foundNode.prev, foundNode);
        foundNode.prev.next = newNode;
        foundNode.prev = newNode;
    }

    _findNode(index){
        let foundNode = this._head;
        for (; index > 0; --index){
            foundNode = foundNode.next;
        }
        return foundNode;  
    }

    isEmpty() {
        return !this.length;
    }

    clear() {
        this.length = 0;
        this._tail = null;
        this._head = null;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
