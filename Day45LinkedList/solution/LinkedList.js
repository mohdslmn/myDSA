class Node {
    constructor(elem) {
      this.elem = elem;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(elem) {
      const node = new Node(elem);
      this.head = node;
      node.next = null;
      this.size = 0;
    }
    //TODO => Add a node at the end of list
    append(elem) {
      //create a new node
      var node = new Node(elem);
      // console.log(node);
  
      //to store current node
      var current;
  
      //if list is empty
      //append the elemnent and make it head
      if (this.head == null) {
        this.head = node;
      } else {
        current = this.head;
  
        //iterate to the end of list
        while (current.next != null) {
          current = current.next;
          // console.log(current.elem);
        }
        //append node
        current.next = node;
      }
    }
    insertAtStart(elem) {
      const node = new Node(elem);
      node.next = this.head;
      this.head = node;
    }
    // insert element at the position index
  // of the list
  insertAt(elem, index)
  {
      if (index < 0 )
          return console.log("Please enter a valid index.");
      else {
          // creates a new node
          var node = new Node(elem);
          var curr, prev;
  
          curr = this.head;
  
          // add the element to the
          // first index
          if (index == 0) {
              node.next = this.head;
              this.head = node;
          } else {
              curr = this.head;
              var it = 0;
  
              // iterate over the list to find
              // the position to insert
              while (it < index) {
                  it++;
                  prev = curr;
                  curr = curr.next;
              }
  
              // adding an element
              node.next = curr;
              prev.next = node;
          }
          this.size++;
      }
  }
  
  
    //TODO => remove node from list
  // removes an element from the
  // specified location
  removeFrom(index)
  {
      if (index < 0 || index >= this.size)
          return console.log("Please Enter a valid index");
      else {
          var curr, prev, it = 0;
          curr = this.head;
          prev = curr;
  
          // deleting first element
          if (index === 0) {
              this.head = curr.next;
          } else {
              // iterate over the list to the
              // position to remove an element
              while (it < index) {
                  it++;
                  prev = curr;
                  curr = curr.next;
              }
  
              // remove the element
              prev.next = curr.next;
          }
          this.size--;
  
          // return the remove element
          return curr.elem;
      }
  }
  //remove element : it return removed elem if  removed elem not found return -1
  // removes a given element from the
  // list
  removeElement(elem)
  {
      var current = this.head;
      var prev = null;
  
      // iterate over the list
      while (current != null) {
          // comparing element with current
          // element if found then remove the
          // and return true
          if (current.elem === elem) {
              if (prev == null) {
                  this.head = current.next;
              } else {
                  prev.next = current.next;
              }
              this.size--;
              return current.elem;
          }
          prev = current;
          current = current.next;
      }
      return -1;
  }
  
  //  Helper Methods
  
    //TODO => Search Element in the list
    search(elem) {
      let curr = this.head;
      while(curr != null){
        if(curr.elem === elem){
          return true;
        }
        curr = curr.next 
      }
        return true;
    }
    //TODO => return index of node
    // finds the index of element
  indexOf(elem)
  {
      var count = 0;
      var current = this.head;
  
      // iterate over the list
      while (current != null) {
          // compare each element of the list
          // with given element
          if (current.elem === elem)
              return count;
          count++;
          current = current.next;
      }
  
      // not found
      return -1;
  }
  // checks the list for empty
  isEmpty()
  {
      return this.size == 0;
  }
    printList() {
      //taking variable to store head because if we iterate th list  with our  head , we will lost head identity
      let array = ["head"];
      let currentList = this.head;
      while (currentList) {
        array.push(currentList.elem);
        currentList = currentList.next;
      }
      array.push(null);
      console.log(array.join(" --> "));
      return;
    }
  
  }
  module.exports = LinkedList;
//   const ll = new LinkedList(1);
//   ll.append(2);
//   ll.append(3);
//   ll.append(12);
//   // ll.insertAfterElem(4,1);
//   ll.insertAt(7,2);
//   ll.insertAt(8,3);
//   ll.insertAt(9,1);
//   ll.removeFrom(1);
//   // console.log(ll.removeElement(12));
//   console.log(ll.search(7));
//   console.log(ll.size_of_list());
//   ll.printList();
  