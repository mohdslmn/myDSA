const LinkedList = require("./LinkedList");
var isPalindrome = function(head) {
    if(!head) return head;
    let fast = head , slow = head;
    while(fast.next !== null && fast.next.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    const mid = slow;
    let rev = reverse(mid);

    while(head != null && rev != null){
        if(head.val !== rev.val){
            return false;
        }
        head = head.next;
        rev = rev.next;
    }
    return true;
};
var reverse = function(head){
 var current = head ;
 var prev;
 while(current != null){
     next = current.next;
     current.next  = prev;
     prev = current;
     current = next;

 }
 head = prev;
 return head;
};
const ll = new LinkedList(1);
ll.append(2);
ll.append(2);
ll.append(1);
// ll.append(5);
// ll.append(6);
console.log(isPalindrome(ll.head)); //true