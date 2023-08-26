var findDisappearedNumbers = function (arr) {
    const result = [];
    cyclicSort(arr);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== i + 1) {
        result.push(i+1);
      }
    }
    return result;
  };
  
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
  const arr = [4,3,2,7,8,2,3,1];
  console.log(findDisappearedNumbers(arr)); // [5,6]