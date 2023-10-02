const LinkedList = require("./LinkedList");
// var middleNode = function(head) {
//     let cnt = 0;
//     let temp = head;
//     while(temp){
//         cnt++;
//         temp = temp.next;
//     }
//     let mid = parseInt(cnt/2);
//     while(mid != 0){
//         head = head.next;
//         mid--;
//     }
//     return head;
// };



//SC: O(1)
//TC : O(N)
//Optimizing this code 
//using slow and fast pointer

var middleNode = function(head) {
    let slow = head , fast = head;
 
    while(fast!== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
 };

 const ll = new LinkedList(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
ll.append(6);

console.log(middleNode(ll.head));