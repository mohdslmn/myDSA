//Brute force approach
/*
let majority = function(nums){
    let count = 0;
    for(let i = 0; i <= nums.length ; i++){
        for(let j = i ;  j <= nums.length ; j++){
            if(nums[i] === nums[j]){
                count++;
            }
        }
        if(count > nums.length/2){
            return nums[i];
        }
    }
 };
 const nums = [1,2,2,3,4,2,2];
console.log( majority(nums));
*/

//Tc : O(n^2)
//Sc : O(1)

// Using "Boyer-Moore Majority Vote Algorithm."
//The Boyer-Moore algorithm is based on the idea that the majority element will cancel out the occurrences of other elements.

const majority = function (nums) {
  let candidate;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (candidate === num) {
      count++;
    } else {
      count--;
    }
  }

  // At this point, candidate is the potential majority element.
  // Now, we need to verify if it appears more than half the size of the array.

  count = 0;
  for (let num of nums) {
    if (num === candidate) {
      count++;
    }
  }

  if (count > nums.length / 2) {
    return candidate;
  } else {
    return null; // No majority element found.
  }
};

const nums = [1, 2, 2, 3, 4, 2, 2];
console.log(majority(nums)); // 2

//TC : O(n)
//SC : O(1)
