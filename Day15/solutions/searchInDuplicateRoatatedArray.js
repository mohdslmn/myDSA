var binarySearch = function (arr, elem,start,end) {
    
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      const guess = arr[mid];
      if (guess === elem) {
        return mid;
      } 
      if (guess > elem) {
        end = mid - 1;
      } 
      else {
        start = mid + 1;
      }
    }
    return -1;
  };

var findPivot = function(arr){
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
    
        let mid = start + Math.floor((end - start)/2 );
        if(mid < end && arr[mid] > arr[mid +1] ){
            return mid;
        }
        if(mid > start && arr[mid] < arr[mid - 1]){
            return mid - 1;

        }
     //skip elements when start,mid ,end are equal
     if(arr[mid] === arr[start] && arr[mid]=== arr[end]){
        
        //checking in the case if start is pivot
        if(arr[start] > arr[start + 1]){
            return start;
        }
        //if start is not pivot
        start++;
        //chack also for end
        if(arr[end] < arr[end - 1]){
            return end - 1;
        }
        end--;
     }
     else if(arr[start] < arr[mid] || (arr[start] === arr[mid] && arr[mid] > arr[end])){
        start = mid + 1;
     }
     else{
        end = mid - 1;
     }
    }
    return -1;
};
var result = function(arr, target){
    let pivot = findPivot(arr);

    if(pivot !== -1){
        if(arr[pivot] === target){
            return pivot;
        }
       // let firstTry = binarySearch(arr,target,0,pivot - 1);
        
        if(target >= arr[0]){
            return binarySearch(arr,target,0,pivot - 1);;
        }
        return binarySearch(arr,target,pivot+1,arr.length - 1);
      
}

return binarySearch(arr,target,0,arr.length - 1);//else pivot is not found , means arr is not rotated
};
const arr = [2,2,2,9];
const target = 9;
console.log(findPivot(arr));
console.log(result(arr,target));