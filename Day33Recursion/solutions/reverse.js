var sum = 0;

function reverse1(n){
    if(n === 0){
        return;
    }
    let rem = n%10;
    sum = (sum * 10) + rem;
    
    reverse1(Math.floor(n/10));

}
reverse1(12345);
console.log(sum);

//another way without using extra variable
// when we need some additional variables in the argument in that case make another function
//here we are creating helper function

function rev2(n){
    let digits = n.toString().length;
    return helper(n,digits); 
}
function helper(n,digits){
    //if there is single digit return digit itself
    if(n%10 === n){
        return n;
    }
    let rem = n % 10;
    return rem * Math.pow(10 , digits - 1) + helper(Math.floor(n/10),digits - 1);
}
console.log(rev2(12345));