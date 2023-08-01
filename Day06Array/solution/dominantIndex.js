
let dominantIndex = function(nums){
    let max = 0;

    for(let i = 0 ; i <= nums.length - 1 ; i++){
        if(nums[i]> max)
         max = nums[i];
    }

    for(let i = 0 ; i <= nums.length - 1 ; i++){
        if(2 * nums[i] > max && max !== nums[i])
          return -1;
    }
    return 1;
};

const nums = [3,6,1,0];
console.log(dominantIndex(nums)); //1

const nums2 = [1,2,3,4];
console.log(dominantIndex(nums2));//-1
