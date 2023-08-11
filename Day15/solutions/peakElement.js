var peakIndexInMountainArray = function(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] < arr[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;    
};

const arr = [10,15,25,5,4,2];
console.log(peakIndexInMountainArray(arr)); // 2  25 is at index 2