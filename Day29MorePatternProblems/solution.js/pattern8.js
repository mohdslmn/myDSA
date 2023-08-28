

function pattern8(n){
    let total = n;
    for(let row = 1 ; row <= (n/2) + 1; row++){
        let pattern = '';
        let spaces = "";
      
       
        // let totalColsInRows = row > 1? total  : n ; 
        for(let k = 1 ; k <= n - total ; k++){
            spaces += " ";
        }
     
      
        for(let col = 1 ; col <= total ; col++){
            pattern += " *";

        }
        total = total - 2;
        console.log(spaces+pattern);
    }
};
pattern8(9);