let frequency = function (nums) {
  let new_nums = [...nums];
  for (let i = 0; i <= nums.length - 1; i++) {
    if (new_nums[i] === true) continue;
    let count = 1;
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] === nums[j]) {
        new_nums[j] = true;
        count++;
      }
    }

    console.log(nums[i] + " " + count);
  }
};
const nums = [1, 2, 2, 5, 5, 3, 3, 3];
frequency(nums);
/*
Output:  1 1
         2 2
         5 2
         3 3
*/

//Tc : O(n^2)
//Sc : O(n)