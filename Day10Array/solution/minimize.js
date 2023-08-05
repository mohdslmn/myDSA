//in this ques pattern in found took a temp =1 ,start iterating on sorted array from n/2 elements then num/2 - temp and add 2 in temp
var minPairSum = function(nums) {
    nums.sort((a,b) => a - b);
    let temp = 1;
    for(let i = nums.length/2 ; i < nums.length ;  i++){
        nums[i] += nums[i - temp];
         temp += 2;
    }
   
    let max = Math.max(...nums);
    return max;
};

const nums = [3,5,2,3];
console.log(minPairSum(nums)); //7