var findInMountainArray = function(target, mountainArr) {
    let peak = peakIndexInMountainArray(mountainArr);
    let firstTry = orderNotKnown(mountainArr,target,0,peak);
    if(firstTry !== -1){
        return firstTry;
    }
    return orderNotKnown(mountainArr,target,peak + 1, mountainArr.length - 1);
};
var peakIndexInMountainArray = function(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] < arr[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;    
};
var orderNotKnown = function(arr,target,left,right){

function binarySearchAscending() {
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Element found
      } else if (arr[mid] < target) {
        left = mid + 1; // Search right half
      } else {
        right = mid - 1; // Search left half
      }
    }
  
    return -1; // Element not found
  }


  function binarySearchDescending() {
    
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Element found
      } else if (arr[mid] > target) {
        left = mid + 1; // Search right half
      } else {
        right = mid - 1; // Search left half
      }
    }
  
    return -1; // Element not found
  }

  if (arr[0] < arr[arr.length - 1]) {
    // Array is sorted in ascending order
    return binarySearchAscending(arr, target);
  } else {
    // Array is sorted in descending order
    return binarySearchDescending(arr, target);
  }
  

};
const arr = [5,6,7,8,4,3,2,1];
const target = 3;
console.log(findInMountainArray(target,arr));