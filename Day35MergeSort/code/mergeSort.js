
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(first, second) {
    const res = [];
    let i = 0;
    let j = 0;

    while (i < first.length && j < second.length) {
        if (first[i] < second[j]) {
            res.push(first[i]);
            i++;
        } else {
            res.push(second[j]);
            j++;
        }
    }

    while (i < first.length) {
        res.push(first[i]);
        i++;
    }

    while (j < second.length) {
        res.push(second[j]);
        j++;
    }

    return res;
}

let arr = [5, 4, 3, 2, 1];
arr = mergeSort(arr);
console.log(arr.toString()); // Output: 1,2,3,4,5
