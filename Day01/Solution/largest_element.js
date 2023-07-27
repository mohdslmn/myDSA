// max element
 const arr = [3,10,8,4,100,1000];
 const res = arr.reduce( (max,curr) => {
    if(curr > max)
      max = curr ;

      return max;
 },0);
 console.log(res);

