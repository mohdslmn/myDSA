
function swap(arr ,lastIndex,maxIndex,){
    let temp;
    temp = arr[maxIndex];
    arr[maxIndex] = arr[lastIndex];
    arr[lastIndex] = temp;

}
function getMax(arr,start,lastIndex){
    let max = start;
    for(let i = 0 ; i <= lastIndex ; i++){
      if(arr[max] < arr[i]){
        max = i;
      }
    
    }
    return max;

}
var selectionSort = function(arr){

    //find max of array and maintain last index of array bcoz in each iteration last element of array is sorted 
    //and swap the max with last index
    for(let i = 0 ; i < arr.length ; i++){

        let lastIndex = arr.length - 1 - i;
        let maxIndex = getMax(arr,0,lastIndex);
        swap(arr,lastIndex,maxIndex,);  
        
    }
   
}
const arr = [10,-5,25,96,155,0] ;
console.log(arr);
selectionSort(arr);
console.log(arr);
