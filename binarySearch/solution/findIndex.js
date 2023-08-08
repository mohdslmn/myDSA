// finding index of an elem using binary search


var findIndex = function (arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  //const mid = start + Math.floor((end - start) / 2);
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
/*
const arr = [2, 4, 8,  10, 12, 16];
const elem = 2;
*/
const arr = [1,2,3,4,5];
const elem = 5;
console.log(findIndex(arr, elem));

/*

const binarySearch = (arr, item) => {
    let l = 0,
      r = arr.length - 1;
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      const guess = arr[mid];
      if (guess === item) return mid;
      if (guess > item) r = mid - 1;
      else l = mid + 1;
    }
    return -1;
  };
  
  console.log(binarySearch([2, 4, 8, 10, 12, 16], 2));
  console.log(binarySearch([1, 2, 3, 4, 5], 5));
  console.log(binarySearch([1, 2, 3, 4, 5], 6));
*/