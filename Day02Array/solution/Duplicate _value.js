/*
let findDuplicate = function(nums){
    for(let j = 0 ; j<=nums.length ; j++){
        for(let i = j ; i <= nums.length ; i++){
            if(nums[j] === nums [i+1])
             return nums[j];
        }
    }
}
const nums = [1,2,3,3,4];
const res = findDuplicate(nums);
console.log(res); 
*/

// TC : O(n * n)
//Sc : O(1)

// Floyd's Algorithm 
let findDuplicate = function(nums){
    //if array is empty return -1
    if(nums.length <= 1) return -1;

    //slow moves with 1 index and fast moves with 2 indeces
    let slow =nums[0], fast = nums[nums[0]];
  
    //to find intersection point
    while(slow!=fast){
        slow  = nums[slow];
        fast = nums[nums[fast]];
    }

    // fast = 0 coz we found intersection point and we start moving from 0th index and intersection point
    fast = 0;
    while(slow != fast){
        slow =  nums[slow];
        fast = nums[fast];
    }
    return fast;
}
const nums = [1,2,3,4,4];
const res = findDuplicate(nums);
console.log(res); 

// time complexity : O(n)
// space complexity : 0(1)