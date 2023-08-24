
function insertionSort(arr){
    for(let i = 0 ; i <= arr.length - 2; i++){
        for(let j = i + 1; j > 0 ; j--){
            if(arr[j] < arr[j - 1]){
                swap(j,j - 1,arr);
            }
            //now j is pointing ith element so checking if j-1 < j then break the loop already sorted otherwise continue sorting
            else{
                break;
            }
        }
    }
}
function swap(i,j,arr){
    let temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

}
const arr = [0,-5,10,100,999,-25];
console.log(arr);
insertionSort(arr);
console.log(arr);