const Stack = require("./Stack");

class QueueUsingStack{
    constructor(){
    this.first = new Stack();
    this.second = new Stack();
    }
    add(item){
        this.first.push(item);
    }
    remove(){
        while(!this.first.isEmpty()){
            this.second.push(this.first.pop());
        }
        let removed = this.second.pop();
        while(!this.second.isEmpty()){
            this.first.push(this.second.pop());
        }
        return removed;
    }
    peek(){
        while(!this.first.isEmpty()){
            this.second.push(this.first.pop());
        }
        let peeked = this.second.peek();
        while(!this.second.isEmpty()){
            this.first.push(this.second.pop());
        }
        return peeked;
    }
    print() {
        const tempStack = new Stack();
        while (!this.first.isEmpty()) {
            tempStack.push(this.first.pop());
        }

        while (!tempStack.isEmpty()) {
            const item = tempStack.pop();
            console.log(item);
            this.first.push(item);
        }
    }
}
const myQueue = new QueueUsingStack();
myQueue.add(1);
myQueue.add(2);
 console.log(myQueue.remove());
// console.log(myQueue.peek());
// console.log(myQueue.remove());
myQueue.print();