
function swap(i,j,arr){
    let temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubbleSort(arr){
    let swapped ;
    
    for(let i = 0; i < arr.length ; i++){
        swapped = false;
        //j < arr.length - i -1 coz in each pass of array last element will be sorted the no need to iterate over these last sorted elements 
        for(let j = 0; j < arr.length - i - 1 ; j++){
         if(arr[j] > arr[j + 1])
            swap(j + 1,j,arr);
            swapped = true;
        }
        //if you didnot swap for i then swap = false and !false = true, break the loop ,it means array is already sorted
        if(!swapped){
            break;
          }
  }
 

}
const arr = [0,-1,5,6,-9];
bubbleSort(arr);
console.log(arr);