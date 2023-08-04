
let check = function(nums){
   
    for(let j = 0 ; j <= nums.length - 1 ; j++){
        for(let i =  nums.length - 1; i >= 0 ; i--){
     if(nums[j] === 2 * nums[i] && i != j)
       return true;
    }
}

      
   
   return false;
};
const nums = [-2,0,10,-19,4,6,-8];
console.log(check(nums)); 

//2nd solution is using HashMap:
/*
let check = function(nums){
    const seen = new Set(nums);
    
    for(let i = 0 ; i <= nums.length - 1 ; i++)
       {
        if(seen.has(nums[i] * 2) || seen.has(nums[i] / 2))
            return true;

            seen.add(nums[i]);
       }
       return false;
       
}
const nums = [-2,0,10,-19,4,6,-8];
console.log(check(nums));
*/