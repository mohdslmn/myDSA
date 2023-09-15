
function Nto1(n){
    if(n === 0){
        return;
    }
  
    Nto1(n-1);
      // here once all functions are in call stack then we start printing
    console.log(n);
}
Nto1(5);

// TC : O(N)
// SC : O(N)