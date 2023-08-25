function swap(arr,i,j){
    let temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

}
var cyclicSort = function(arr){
    let i = 0;
   
    while(i < arr.length){
        let correct = arr[i]  ;
        if(arr[i] !== arr[correct] ){
            swap(arr,i,correct);
        }
        else{
        i++;
        }
    }
};
const arr = [2,3,0,1];
console.log(arr);
cyclicSort(arr);
console.log(arr); // [0,1,2,3]

