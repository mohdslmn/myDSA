
function rev(n){
    let digit = n.toString().length;
    return helper(n,digit);
}
function helper(n , digit){
    if(n%10 === n){
        return n;
    }
    let rem = n % 10;
    return rem * Math.pow(10,digit - 1) + helper(Math.floor(n/10),digit - 1);
}
function palindrome(n){
    return rev(n) === n;
}
console.log(palindrome(121));