  //We can use two pointers i and j, where i points to the last unique element found so far,
  // and j points to the current element being examined.
  // If nums[i] and nums[j] are equal, 
  //we just increment j. 
  //Otherwise, we increment i and copy nums[j] to nums[i]. At the end, we return i+1, which represents the length of the modified array.

var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] !== nums[j]) {
        i++;
        nums[i] = nums[j];
      }
    }
    return i + 1;
  };

  const  nums =  [1,1,2];
  const res = removeDuplicates(nums);
  console.log(res);
  for( let i = 0; i < res; i++){
    console.log(nums[i]);
  }

// Complexity : 
// Time complexity: Since we only traverse the array once, the time complexity of the algorithm is O(n).
// Space complexity: The algorithm uses constant extra space, so the space complexity is O(1).

