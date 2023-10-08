class Queue {
  constructor(size) {
    // this.data = size;
    this.end = -1;
    this.data = new Array(size);
  }

  isFull() {
    return this.end === this.size - 1;
  }

  isEmpty() {
    return this.end === -1;
  }
  insert(item) {
    if (this.isFull()) {
      return false;
    }
    // this.end++;
    this.data[++this.end] = item;

    return true;
  }
  remove() {
    if (this.isEmpty()) {
      return false;
    }
    let removed = this.data[0];
    //shift the elements to left
    for (let i = 0; i < this.end; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.end--;
    return removed;
  }
  front() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    }
    return this.data[0];
  }
  printQueue() {
    if (this.isEmpty()) {
      console.log("stack is empty!!");
    }
    for (let i = 0; i <= this.end; i++) {
      console.log(this.data[i]);
    }
    console.log("END");
  }
}
const queue = new Queue(5);
queue.insert(1);
queue.insert(2);
queue.insert(3);
queue.insert(4);
queue.insert(5);
queue.remove();
console.log(queue.front());
queue.printQueue();
