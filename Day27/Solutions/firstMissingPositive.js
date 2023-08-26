var firstMissingPositive = function(arr) {
    let i = 0;
     while(i < arr.length){
        let correct = arr[i] - 1 ;
        if(arr[i] > 0 && arr[i] <= arr.length && arr[i] !== arr[correct] ){
            swap(arr,i,correct);
        } 
        else{
            i++;
        }
     }
    
     //case 1:
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] !== i + 1){
            return i + 1;
        }
    }
    //case 2:
    return arr.length + 1;
};
function swap(arr,i,j){
    let temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

}
const arr = [3,4,-1,1];
console.log(firstMissingPositive(arr));//2