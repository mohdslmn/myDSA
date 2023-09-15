
var minMaxRecursion = function(arr , i){
    if(i > arr.length - 1){
        return -1;
    }
    let max = 0;
    if(arr[i] > max){
        minMaxRecursion(arr,i);
       max = arr[i];
    }
    i++;
   
   return max;
};
const arr = [3,2,5,1];
console.log(minMaxRecursion(arr,0))