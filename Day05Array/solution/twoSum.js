/* Brute Force:
var twoSum = function(nums,target){
    for(let i = 0; i <= nums.length - 1; i++){
        for(let j = i + 1; j <= nums.length - 1 ; j++){
            if(nums[i] + nums[j] === target)
            return [i,j] ;
        }
        
    }
};
const nums = [1,2,3,4,5];
let target = 6;
const res = twoSum(nums,target);
console.log(res);
*/
//HashMap optimize method : 
//create a empty hash table
//iterate over nums[i] and 
// find complement which is equals to nums[i] - target
//and check if complement found in hashMap return indeces i.e.answer
//otherwise set index nad complement in table
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        const complement = target - nums[i];
        if(map.has(complement))
            return [map.get(complement), i];
        map.set(nums[i], i);
    }
    return [];
};


const nums = [2,7,11,15];
let target = 9;
const res = twoSum(nums,target);
console.log(res);