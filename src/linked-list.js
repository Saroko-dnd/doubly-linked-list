const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
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

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
