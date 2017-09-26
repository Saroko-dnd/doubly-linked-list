const Node = require('./node');

class LinkedList {
    constructor() {
        this.clear();
    }

    append(data) {
        if(this.length){
            this._tail.next = new Node(data, this._tail);
            this._tail = this._tail.next;
        }else{
            this._tail = new Node(data);
            this._head = this._tail;
        }
        ++this.length;
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
        if (index === this.length){
            this.append(data);
        }else{
            let foundNode = this._findNode(index);
            const newNode = new Node(data, foundNode.prev, foundNode);
            if (foundNode.prev){
                foundNode.prev.next = newNode;
            }else{
                this._head = newNode;
            }
            foundNode.prev = newNode;
            ++this.length;
        }
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

    deleteAt(index) {
        if (this.length === 1){
            this.clear();
        }else{
            let foundNode = this._findNode(index);
            if (!foundNode.next){
                this._tail = this._tail.prev;
                this._tail.next = null;
            }else if (!foundNode.prev){
                this._head = this._head.next;
                this._head.prev = null;
            }else{
                foundNode.prev.next = foundNode.next;
                foundNode.next.prev = foundNode.prev;             
            }
            --this.length;  
        }
    }

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
