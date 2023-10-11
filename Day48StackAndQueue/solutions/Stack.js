
class Stack {
    constructor(size) {
        this.size = size;
        this.ptr = -1;
        this.data = new Array(size);
    }

    push(item) {
        if (this.ptr === this.size - 1) {
            console.log("Stack is Full!!!!");
            return false;
        }

        this.ptr++;
        this.data[this.ptr] = item;
        return true;
    }

    pop() {
        if (this.isEmpty()) {
            console.log("stack is empty!!");
            return null;
        } else {
            return this.data[this.ptr--];
        }
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Nothing to peek!!");
            return null;
        }
        return this.data[this.ptr];
    }

    isFull() {
        return this.ptr === this.size - 1;
    }

    isEmpty() {
        return this.ptr === -1;
    }
    printStack(){
        if(this.isEmpty()){
            console.log("stack is empty!!");
        }
        let temp = this.ptr;
        while(temp > -1){
            console.log(this.data[temp]);
            temp--;
        }
    }
}
module.exports = Stack;


// const stack = new Stack(5);
// stack.push(1);
// // console.log(stack.push(1));
// stack.push(2);
// stack.push(3);
// stack.push(4);
// // stack.push(5);
// // console.log(stack.peek());
// // console.log(stack.pop());
// // console.log(stack.pop());
// // console.log(stack.pop());
// // console.log(stack.pop());
// // console.log(stack.pop());
// // console.log(stack.pop());
// console.log(stack.isEmpty());
// console.log(stack.isFull());
// stack.printStack();
