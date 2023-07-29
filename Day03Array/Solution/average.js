
const nums = [1,2,4,6,5];

//res will return the sum of array elements

const res = nums.reduce((sum,curr) => {
    sum = sum + curr;
    return sum;
},0);

// here we recieve res in avg variable n calculate avg then print 

  let avg = res/nums.length ;
console.log(avg);

//TC : O(n) ,since reduce iterates
// SC : O(1)