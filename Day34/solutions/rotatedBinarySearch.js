function rotatedBinarySearch(arr, target , s ,e) {
  if (s > e) {
    return -1;
  }
  let mid = s + Math.floor((e - s) / 2);

  if (arr[mid] === target) {
    return mid;
  }
  if (arr[s] <= arr[mid]) {
    if (target >= arr[s] && target <= arr[mid]) {
      return rotatedBinarySearch(arr, target, s, mid - 1);
    } else {
      return rotatedBinarySearch(arr, target, mid + 1, e);
    }
  }
  if (target >= arr[mid] && target <= arr[e]) {
    return rotatedBinarySearch(arr, target, mid + 1, e);
  }
  return rotatedBinarySearch(arr, target, s, mid - 1);
}
const arr = [5, 6, 7, 8, 9, 1, 2, 3];
const target = 1;
let s = 0;
console.log(rotatedBinarySearch(arr, target, s, arr.length - 1));
