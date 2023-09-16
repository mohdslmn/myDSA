function productOfDigits(n) {
    if (n % 10 === n) {
        return n;
    }
    return (n % 10) * (productOfDigits(Math.floor(n / 10)));
}

console.log(productOfDigits(404));
