function swap(arr,i,j){
    let temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

}
var cyclicSort = function(arr){
    let i = 0;
   
    while(i < arr.length){
        let correct = arr[i] - 1 ;
        if(arr[i] !== arr[correct] ){
            swap(arr,i,correct);
        }
        else{
        i++;
        }
    }
};
const arr = [2,1,4,7,4,8,3,6,4,7];
// console.log(arr);
cyclicSort(arr);
console.log(arr);


// console.log(res); // [0,1,2,3]

