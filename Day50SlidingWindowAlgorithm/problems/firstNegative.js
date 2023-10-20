//Ques.First negative integer in every window of size k.
// Given an array and a positive integer k, find the first negative integer for each window(contiguous subarray) of size k. If a window does not contain a negative integer, then print 0 for that window.

// Examples:  

// Input : arr[] = {-8, 2, 3, -6, 10}, k = 2
// Output : -8 0 -6 -6

// In the first window [2, -1, -7], the first negative number is -1.
// In the second window [-1, -7, 8], the first negative number is -1.
// In the third window [-7, 8, 6], the first negative number is -7.
// In the fourth window [8, 6, -3], the first negative number is -7.
// In the fifth window [6, -3, -2], the first negative number is -3.
// In the sixth window [-3, -2], the first negative number is -3.

function firstNegativeInWindow(arr, k) {
    const result = [];
    const negatives = [];
    
    for (let i = 0; i < k; i++) {
        if (arr[i] < 0) {
            negatives.push(arr[i]);
        }
    }
    
    for (let i = k; i <= arr.length; i++) {
        if (negatives.length > 0) {
            result.push(negatives[0]);
            if (negatives[0] === arr[i - k]) {
                negatives.shift();
            }
        } else {
            result.push(0); // If there are no negative numbers in the window, add 0.
        }
        
        if (i < arr.length && arr[i] < 0) {
            negatives.push(arr[i]);
        }
    }
    
    return result;
}

const arr = [-8, 2, 3, -6, 10];
const k = 2;
console.log(firstNegativeInWindow(arr, k));
