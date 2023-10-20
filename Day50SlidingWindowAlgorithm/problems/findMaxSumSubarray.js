// //brute force approach
// var maxSumSubArray = function(arr){
  
//     let max = 0;
//     for(let i = 0 ; i < arr.length - 2 ; i++){
//         let sum  = 0;
//         for(let j = i ; j < i + 3 ; j++){
//            sum += arr[j];
     
//         }
//         max = Math.max(max,sum);
       
//     }
//     return max;
// }
// const arr =  [2,3,5,2,9,7,1];
// console.log(maxSumSubArray(arr));

//Silding Window Approach

var maxSumSubArray = function(arr) {
    if (arr.length < 3) {
        // If the array has less than 3 elements, we cannot form a subarray of length 3.
        return 0;
    }

    let max = -Infinity; // Initialize max to a very small value

    // Calculate the initial sum of the first subarray of length 3
    let sum = arr[0] + arr[1] + arr[2];

    // Start the sliding window from the 2nd position (i = 1)
    for (let i = 1; i < arr.length - 2; i++) {
        // To get the sum of the next subarray, subtract the first element of the previous subarray
        // and add the next element.
        sum = sum - arr[i - 1] + arr[i + 2];

        // Update max with the maximum sum
        max = Math.max(max, sum);
    }

    return max;
}

const arr = [2, 3, 5, 2, 9, 7, 1];
console.log(maxSumSubArray(arr));

