

function rotation(nums,k){
for (let i = nums.length - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  //console.log(nums);
  for (let j = k - 1; j >= 0; j--) {
    nums[j] = nums.pop();
  }
console.log(nums);
}

const nums = [1,2,3,4];
let k = 2;
rotation(nums,2);

