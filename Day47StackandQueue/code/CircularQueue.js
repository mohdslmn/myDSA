
class CircularQueue {
    constructor(size) {
        this.end = -1;
        this.front = 0;
        this.size = 0;
        this.data = new Array(size);
    }

    isFull() {
        return this.size === this.data.length;
    }

    isEmpty() {
        return this.size === 0;
    }

    insert(item) {
        if (this.isFull()) {
            return false;
        }

        this.end = (this.end + 1) % this.data.length;
        this.data[this.end] = item;
        this.size++;

        return true;
    }

    remove() {
        if (this.isEmpty()) {
            return false;
        }

        let removed = this.data[this.front];
        this.front = (this.front + 1) % this.data.length;
        this.size--;

        return removed;
    }

    front() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        }
        return this.data[this.front];
    }

    printQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty!!");
            return;
        }
        let i = this.front;
        do {
            console.log(this.data[i]);
            i = (i + 1) % this.data.length;
        } while (i !== (this.end + 1) % this.data.length);
        console.log("END");
    }
}
module.exports = CircularQueue;
// const circularQueue = new CircularQueue(5);
// circularQueue.insert(3);
// circularQueue.insert(6);
// circularQueue.insert(5);
// circularQueue.insert(19);
// circularQueue.insert(1);

// circularQueue.printQueue();
// console.log(circularQueue.remove());
// circularQueue.insert(133);
// circularQueue.printQueue();
