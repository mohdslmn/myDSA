const Stack = require("./Stack");

class DynamicStack extends Stack{
    constructor(size){
        super(size); //call Stack class
    }
    push(item){
        //when array is full
        if(this.isFull()){
            let temp = new Array(this.size * 2);

            //copy all previous data in new array
            for(let i = 0 ; i < this.size; i++){
                temp[i] = this.data[i];
            }
            this.size *= 2;
            this.data = temp;
        }
        //at this point we know that array is not full
        //insert item
        return super.push(item);
    }

}
const stack1 = new DynamicStack(5);
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
stack1.push(5);
stack1.push(5);
stack1.printStack();
