
function Nto1(n){
    if(n === 0){
        return;
    }
    console.log(n);
    Nto1(n-1);
}
Nto1(5);

// TC : O(N)
// SC : O(N)