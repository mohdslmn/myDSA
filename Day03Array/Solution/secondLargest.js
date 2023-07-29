
let secondLargestSmallest = function(nums) {
        if (nums.length < 2) {
            // Not enough elements to find second largest and smallest
            return null;
        }
    //four variables for four values
        let firstLargest = Number.MIN_SAFE_INTEGER;
        let secondLargest = Number.MIN_SAFE_INTEGER;
        let firstSmallest = Number.MAX_SAFE_INTEGER;
        let secondSmallest = Number.MAX_SAFE_INTEGER;
    // iterate in the manner in which each element of array is compared with its next index element
        for (let num of nums) {
            if (num > firstLargest) {

                //always  in secondLargest elemnt firstLargest value is assigned which is grtr than previous //index
                secondLargest = firstLargest;

                //In firstLargest next elemnt is assigned for next iteration
                firstLargest = num;

                // for secondLargest comparing that secondLargest is grtr than every other elemnt of array and not equals to firstLargest
            } else if (num > secondLargest && num !== firstLargest) {
                secondLargest = num;
            }
    
            if (num < firstSmallest) {
                secondSmallest = firstSmallest;
                firstSmallest = num;

                // same for secondSmallest
            } else if (num < secondSmallest && num !== firstSmallest) {
                secondSmallest = num;
            }
        }
    
        return {
            secondLargest: secondLargest,
            secondSmallest: secondSmallest
        };
    };
    


const nums = [1,2,4,6,5];
const output = secondLargestSmallest(nums);
console.log(output);

// TC : O(n)
//SC : O(1)