var maxSlidingWindow = function(nums, k) {
    
    if(nums.length == 1) {
        return nums;
    }

    let queue = [];
    let res = [];
    let l = 0;
    let r = 0;
    
    while(r < nums.length) {

        while(nums[r] > queue[queue.length-1] && queue.length > 0) {
            queue.pop();
        }
        queue.push(nums[r]);
    
        if(r - l + 1 < k) {
            r++;
        }

        else if(r - l + 1 === k) {
            <!-- Adding first element of the queue to result array -->
            res.push(queue[0])
            if(queue[0] === nums[l]) {
                queue.shift();
            }
            l++;
            r++;
        }
    }
    return res;
};

const  nums = [1,3,-1,-3,5,3,6,7], k = 3;
console.log(maxSlidingWindow(nums,k)); //[ 3, 3, 5, 5, 6, 7 ]