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
        //check also for end
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


var rotateCount = function(arr){
    
    let pivot = findPivot(arr) ;
    return pivot + 1;
};
   

const arr = [7, 9, 11, 12, 15];
console.log(rotateCount(arr));