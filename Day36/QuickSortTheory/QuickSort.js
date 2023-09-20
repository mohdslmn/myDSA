
function mergeSort(arr,low,hi){
    if(low >= hi){
        return;
    }
    let s = low;
    let e =  hi;
    let m = s + Math.floor((e - s)/2);
    let pivot = arr[m];
    while(s <= e){
        while(arr[s] < pivot){
            s++;
        }
        while(arr[e] > pivot){
            e--;
        }
        if(s <= e){
            let temp = arr[s];
            arr[s] = arr[e];
            arr[e] = temp;
            s++;
            e--;
        }

        // now my pivot is at correct index, please sort two halves now

        mergeSort(arr,low,e);
        mergeSort(arr,s,hi);
    }

}
const arr = [5,4,3,2,1];
mergeSort(arr,0,arr.length - 1);
console.log(arr.toString()); // 1,2,3,4,5