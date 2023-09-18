
function sortedArray(arr,index){
    // Base Condition
    if(index === arr.length - 1){
        return true;
    }
    //each recursion call will return next array index like arr[0] < arr[1] && sortedArray(arr, index + 1) 
    //sortedArray() will return arr[1] < arr[2] && sortedArray(arr , 2)
    return arr[index] < arr[index + 1] && sortedArray(arr , index + 1);
}

const arr = [1,2,5,6,19] ;

console.log(sortedArray(arr,0));