/*
var findLeader =  function(arr){
    let leader = [];
    for(let i = 0; i < arr.length ; i++){
        let ans = true;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] >  arr[i]){
            ans = false;
            break;
            }
           
        }
        if(ans === true){
        leader.push(arr[i]);
        }
      //  console.log(leader)
        
    }
    return leader;
};
*/
//Tc : O(n^2)
//SC : O(n) where n is size of leader.
/*

/*for (let i = 0; i < res.length; i++) {
    console.log(res[i]);
  }
  console.log("hi")
  */
 

//Optimize solution:

function printLeaders(arr, n) {

    let ans = [];
  
    // Last element of an array is always a leader,
    // push into ans array.
    let max = arr[arr.length - 1];
    ans.push(max);
  
    // Start checking from the end whether a number is greater
    // than max no. from right, hence leader.
    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] > max) {
        ans.push(arr[i]);
        max = arr[i];
      }
    }
  
    return ans;
  }
  
  // Array Initialization.
  let n = 6;
  let arr = [4,7,1,0];
  
  let ans = printLeaders(arr, n);
  
  for (let i = ans.length - 1; i >= 0; i--) {
    console.log(ans[i]);
  }
//TC :  O(n)
//SC : O(n)