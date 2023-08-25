
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
        if(arr[i] > arr.length){
            continue;
        }
        if(arr[i] !== arr[correct] ){
            swap(arr,i,correct);
        }
        else{
        i++;
        }
    }
};
const arr = [9,6,4,2,3,5,7,0,1];
console.log(arr);
cyclicSort(arr);

for(let i = 0; i < arr.length; i++){
    if(arr[i] !== i){
        console.log(i);
    }
}