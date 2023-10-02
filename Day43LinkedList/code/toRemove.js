

/*
//for array DS

// const removeValues = (toRemove,ds) => {
     
//     for(let i = 0 ; i < toRemove ;i++){
//         if(ds[0] < ds[1]){
//             // ds.splice(i,1);
//             ds.shift();
//             // console.log(ds[i]);
//         }
//         else{
//             ds.splice(1,1);
//             // console.log(ds[i+1]);
//         }
//     }
//     return ds;
// }
// const ds = [9,8,2,5,6,7,2];
// const toRemove = 3;

// console.log(removeValues(toRemove,ds));//[ 9, 6, 7, 2 ]

// TC: O(toRemove) * O(N)
//TC exceeds so using LL

*/

//using linkedList
const LinkedList = require('./LinkedList');

const removeValues = (toRemove,ll) => {
    // console.log(ll);
    for(let i = 0 ; i < toRemove ;i++){
      first = ll.head.elem;
     second = ll.head.next.elem;

     if(first < second){
        ll.removeElement(first);
     }
     else{
        ll.removeElement(second);
     }
    }
}
// SC : O(1)
// TC : O(toRemove) {removeELement time complexity will be always O(1)}
const ds = [9,8,2,5,6,7,2];
const toRemove = 3;
const ll = new LinkedList(ds[0]);

for(let i = 1 ; i < ds.length ;i++){
  ll.append(ds[i]);
}
// ll.printList();
removeValues(toRemove,ll);
ll.printList(); //head --> 9 --> 6 --> 7 --> 2 --> 