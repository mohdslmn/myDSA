

var pattern4 = function(n){
    for(let row = 1; row <= n; row++){
        let pattern = '';
        for(let col = 0 ; col <= n - row; col++){
            pattern += "*";
        }
        console.log(pattern);
    }

};
pattern4(4);

