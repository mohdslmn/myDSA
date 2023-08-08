
var orderNotKnown = function(arr,target){

function binarySearchAscending() {
    let left = 0;
    let right = arr.length - 1;
  
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
    let left = 0;
    let right = arr.length - 1;
  
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

  if (arr[0] < arr[1]) {
    // Array is sorted in ascending order
    return binarySearchAscending(arr, target);
  } else {
    // Array is sorted in descending order
    return binarySearchDescending(arr, target);
  }
  

};

 
const arr = [5,4,3,2,1];
const elem = 4;
console.log(orderNotKnown(arr, elem));