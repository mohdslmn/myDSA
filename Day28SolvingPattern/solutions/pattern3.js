
var pattern3 = function(n){
    for(let row = 1; row <= n; row++){
        let pattern = '';
        for(let col = 1 ; col<=n ; col++){
            pattern += "*";
        }
        console.log(pattern);
    }

};
pattern3(4);