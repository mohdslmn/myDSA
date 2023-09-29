class Node{
    constructor(elem){
        this.elem = elem;
        this.next = null;
    }
}



class LinkedList{
    constructor(elem){
        const initialNode = new Node(elem);
        this.head = initialNode;
    }
    //TODO => Add a node at the end of list
    append(elem){
        //create a new node
        var node = new Node(elem);
        // console.log(node);

        //to store current node
        var current ;

        //if list is empty
        //append the elemnent and make it head
        if(this.head == null){
            this.head = node;
        }
        else{
            current = this.head;

        //iterate to the end of list
        while(current.next != null){
            current = current.next ;
            // console.log(current.elem);
        }
        //append node
        current.next = node;
        }
    }
    //TODO => remove node from list
    remove(elem){

    }
    //TODO => Search Element in the list
    search(elem){

    }
    //TODO => update node with new value in the list
    update(oldVal,newVal){

    }
    printList(){
        //taking variable to store head because if we iterate th list  with our  head , we will lost head identity 
        let array = ["head"];
        let currentList = this.head;
        while(currentList){
            array.push(currentList.elem);
            currentList = currentList.next;
        }
        array.push(null);
        console.log(array.join(" --> "));
        return;
    }
}
const ll =new LinkedList(1);
ll.append(2);
ll.append(3);
ll.printList();