var subarraySum = function(nums, k) {
    if(nums.length==1&&k==0) return 0;
  for(let i=1;i<nums.length;i++){
      nums[i] = nums[i]+nums[i-1];
  }
  let map = new Map();
  map.set(0,1);
  let count = 0;
  for(let i=0;i<nums.length;i++){
      let value = nums[i] - k;
      if(map.has(value)) count+=map.get(value);
      if(!map.has(nums[i])) map.set(nums[i],1);
      else map.set(nums[i],map.get(nums[i])+1);
  }
  return count;
};

const  nums = [1,2,3], k = 3;
console.log(subarraySum(nums,k));