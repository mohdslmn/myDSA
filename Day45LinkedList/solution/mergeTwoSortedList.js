const LinkedList = require("./LinkedList");
function mergeTwoSortedList(l1,l2){
    let node1 = l1.head;
    let node2 = l2.head;
    let result = new LinkedList();

        while(node1 !=null && node2 != null){
            if(node1.elem < node2. elem){
          result.append(node1.elem);
          node1 = node1.next;
        }
        else{
            result.append(node2.elem);
          node2 = node2.next;
        }
    }
    while(node1 != null){
        result.append(node1.elem);
        node1 = node1.next;
    }
    while(node2 != null){
        result.append(node2.elem);
        node2 = node2.next;
    }
    return result;
      
   
}
  const l1 = new LinkedList(1);
  l1.append(2);
  l1.append(4);
  const l2 = new LinkedList(1);
  l2.append(3);
  l2.append(4);
  l1.printList();
  l2.printList();
  const output = mergeTwoSortedList(l1,l2);
output.printList();