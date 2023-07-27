
 function sum_of_element(arr){
       const output = arr.reduce((sum,curr) => sum = sum + curr , 0 );
       return output;
 }

  const arr = [12,10,10,100,1000];
 
  const res = sum_of_element(arr);
 console.log(res);
