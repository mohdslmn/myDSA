const LinkedList = require("./LinkedList");

var hasCycle = function(head) {
    let fast = head;
  let slow = head;

  while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;

      if (fast === slow) {
          let temp = slow;
          let length = 0;
          do{
            temp = temp.next;
            length++;
          } while(temp != slow);
          return length;
      }
  }

  return false;  
};
