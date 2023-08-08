
var searchRange = function(nums, target) {
    let start = -1;
    let end = -1

    function findLeftMostIndex(){
        let left = 0;
        let right = nums.length-1;

        while(left<=right){
          const mid = left+Math.floor((right-left)/2)
          const guess = nums[mid]
          if(guess === target){
            start = mid;
            right = mid-1;
          }else if(guess > target){
            right = mid-1;
          }else{
            left = mid+1;
          }
        }
    }

    function findRightMostIndex(){
        let left = 0;
        let right = nums.length-1;

        while(left<=right){
          const mid = left+Math.floor((right-left)/2)
          const guess = nums[mid]
          if(guess === target){
            end = mid;
            left = mid+1;
          }else if(guess > target){
            right = mid-1;
          }else{
            left = mid+1;
          }
        }
    }

    findLeftMostIndex()
    findRightMostIndex()

    return [start,end];
};

const nums = [5,7,7,8,8,10], target = 8;
console.log(searchRange(nums,target));