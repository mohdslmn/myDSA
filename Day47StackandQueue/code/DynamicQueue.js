const CircularQueue =  require('./CircularQueue');
class DynamicQueue extends CircularQueue{
    constructor(size){
        super(size); //call CircularQueue class
    }
    insert(item) {
        if (this.isFull()) {
            let temp = new Array(this.size * 2);
    
            // Copy all previous data into the new array
            for (let i = 0; i < this.size; i++) {
                temp[i] = this.data[(this.front + i) % this.data.length];
            }
    
            this.front = 0;
            this.end = this.size - 1;
            // this.size *= 2;
            this.data = temp;
        }
    
        return super.insert(item);
    }
    printQueue1() {
        let current = this.front;
    
        while (current !== this.end) {
            console.log(this.data[current]);
            current = (current + 1) % this.size;
        }
    
        console.log(this.data[this.end]);
        console.log('END');
    }
    
}
const dynamicQueue = new DynamicQueue(5);
dynamicQueue.insert(1);
dynamicQueue.insert(2);
dynamicQueue.insert(3);
dynamicQueue.insert(4);
dynamicQueue.insert(5);
dynamicQueue.insert(6);
dynamicQueue.insert(7);
// dynamicQueue.remove();
// console.log(dynamicQueue.remove());
dynamicQueue.printQueue1();