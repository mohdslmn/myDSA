//take the differences of elements of array next find mininmum from them
var findValueOfPartition = function(nums) {
    nums.sort((a,b)=>{return a-b})
    let res = Infinity;
    for(let i = 0 ; i < nums.length-1 ;i++){
        res = Math.min(nums[i+1] - nums[i],res)
    }
    return res;
};
const nums = [1,3,2,4];
console.log(findValueOfPartition(nums)); //1