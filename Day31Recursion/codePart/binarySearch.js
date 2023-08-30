
var binarySearchRecursion = function(arr,target,start,end){

    //base case
    if(start > end){
        return -1;
    }
    let mid = start + Math.floor((end - start)/2) ;

    if( arr[mid] === target ){
        return mid;
    }

    if(target < arr[mid]){
        return binarySearchRecursion(arr,target,start,mid - 1);
    }
    
    return binarySearchRecursion(arr,target,mid + 1,end);


}
const arr = [2,3,6,8,124,176,345,900];
const target = 345;
console.log(binarySearchRecursion(arr,target,0,arr.length - 1));