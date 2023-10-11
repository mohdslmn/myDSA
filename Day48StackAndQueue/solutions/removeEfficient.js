//Queue using stacks but remove operation will be efficient and take O(1) complexity:
//Google Asked this Question

const Stack = require("./Stack");

class QueueUsingStack{
    constructor(){
    this.first = new Stack();
    this.second = new Stack();
    }
    add(item){
        while(!this.first.isEmpty()){
            this.second.push(this.first.pop());
        }
        // let removed = this.second.pop();
        this.first.push(item);
        while(!this.second.isEmpty()){
            this.first.push(this.second.pop());
        }
    }
    remove(){
        if (this.first.isEmpty()) {
            return null;  // Queue is empty
        }
       return this.first.pop();
    }
    peek(){
        
        return this.first.peek();
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