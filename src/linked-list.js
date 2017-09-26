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

        return this;
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

        return this;
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

        return this;
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

        return this;
    }

    reverse() {
        if (this.length > 1){
            let nodeFoundFromHead = this._head;
            let nodeFoundFromTail = this._tail;
            let bufferForData = null;

            for(let counter = 0; counter < Math.floor(this.length/2); ++counter){
                bufferForData = nodeFoundFromHead.data;
                nodeFoundFromHead.data = nodeFoundFromTail.data;
                nodeFoundFromTail.data = bufferForData; 
                nodeFoundFromHead = nodeFoundFromHead.next;
                nodeFoundFromTail = nodeFoundFromTail.prev;   
            }
        }

        return this;
    }

    indexOf(data) {
        let foundIndex = -1;
        let bufferForIndex = 0;
        let BufferForNode = this._head;

        while (BufferForNode && foundIndex === -1) {
            if (BufferForNode.data === data) {
                foundIndex = bufferForIndex;
            }else{
                ++bufferForIndex;
                BufferForNode = BufferForNode.next;
            }
        }

        return foundIndex;
    }
}

module.exports = LinkedList;
