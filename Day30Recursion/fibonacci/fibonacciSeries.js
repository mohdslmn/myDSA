
function fibo(n){
    //base case
    if(n < 2){
        return n;
    }

    //performing recursion
    return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(4));