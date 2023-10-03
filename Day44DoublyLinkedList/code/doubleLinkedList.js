class Node{
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next =null;
    }
}
class DoublyLinkedList{
    constructor(value) {
        this.head = new Node(value);
        this.length = 1;
        this.tail = this.head;
    }
  //add node at the end of the list
  append(value){
    let newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    this.length++;
  }
  //prepend add node at the start of the list
  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode; 
    this.length++; 
    
}
removeAt(index){
   
    if(index < 0 || index > this.length){
        console.log(`plzz insert valid index`);
        return;
    }
    //remove head
    if(index === 0){
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
    }
    //remove tail
    // if(this.tail && index === this.length - 1){
    //     this.tail = this.tail.previous;
    //     console.log(this.tail);
    //     // this.tail.next = null;
    //     this.length--;
    //     return;
    // }
    
    //remove node at an index
    let prevoiusNode =this.head;
    for(let k = 0 ; k < index -1; k++){
        prevoiusNode = prevoiusNode.next;
    }
    let deleteNode = prevoiusNode.next;
    let nextNode = deleteNode.next;

    prevoiusNode.next = nextNode;
    nextNode.prev = deleteNode;
    this.length--;
}
//search
search(value) {
    let curr = this.head;
    while(curr != null){
      if(curr.value === value){
        return true;
      }
      curr = curr.next 
    }
      return true;
  }
  //Helper Methods
  printList() {
    //taking variable to store head because if we iterate th list  with our  head , we will lost head identity
    let array = ["head"];
    let currentList = this.head;
    while (currentList) {
      array.push(currentList.value);
      currentList = currentList.next;
    }
    array.push(null);
    console.log(array.join(" <--> "));
    return;
  }
  isEmpty(){
    
        return this.size === 0;
   
  }
  size(){
    return this.length;
  }

}
const dll = new DoublyLinkedList(1);
dll.append(2);
dll.append(3);
dll.prepend(0);
dll.removeAt(1);
console.log(dll.search(3));
dll.printList();