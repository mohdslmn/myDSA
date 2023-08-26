var findDuplicate = function(arr) {
    let i = 0;
    while(i < arr.length){
        if(arr[i] !== i + 1){
            let correct = arr[i] - 1 ;
            if(arr[i] !== arr[correct] ){
                swap(arr,i,correct);
            }
            else{
                return arr[i];
            }
            
        }
        else{
            i++;
            }
    }
 };
 
 function swap(arr,i,j){
     let temp;
     temp = arr[i];
     arr[i] = arr[j];
     arr[j] = temp;
 
 }

const arr = [1,3,4,2,2];
console.log(findDuplicate(arr));  