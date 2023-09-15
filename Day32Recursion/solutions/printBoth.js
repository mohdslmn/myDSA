

function Nto1(n){
    if(n === 0){
        return;
    }
    console.log(n);
    Nto1(n-1);
    console.log(n);
}
Nto1(5); 
/*
output :
5
4
3
2
1
1
2
3
4
5
*/
// TC : O(N)
// SC : O(N)