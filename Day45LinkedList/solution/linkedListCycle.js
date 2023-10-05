const LinkedList = require("./LinkedList");

var hasCycle = function(head) {
    let fast = head;
  let slow = head;

  
  while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;

      if (fast === slow) {
          return true;
      }
  }

  return false;  
};
// https://leetcode.com/problems/linked-list-cycle/ 