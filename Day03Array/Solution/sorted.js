
let sortedOrNot = function (nums) {
  //taking two variables asc and desc
  let asc = 0;
  let desc = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    //if array element is smaller than their associative increment asc
    if (nums[i] <= nums[i + 1]) asc++;
    //if array element is grtr than their associative increment desc
    else if (nums[i] >= nums[i + 1]) desc++;

    // if acs & desc both grtr than 0 means array is not sorted
    if (asc > 0 && desc > 0) {
      return false;
    }
  }
  return true;
};
const nums = [20, 23, 23, 45,45, 78, 88];
console.log(sortedOrNot(nums)); // true
const nums2 = [20 ,20 ,78, 98, 99, 97];
console.log(sortedOrNot(nums2)); //false

//Tc: O(n)
//Sc : O(1)
