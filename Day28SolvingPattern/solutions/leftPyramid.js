 var leftPyramid = function(n){
    for(let row = 1; row <= n ; row++) {
        //taking empty string to concatenate
        let pattern = "";
        let spaces = '';

        for(let k = 1; k <= (n - row) ; k++){
            spaces += " ";     
        }
        

        for(let col = 1; col <= row ; col++){
            //concatenating Alphabets by unicode for every row
            pattern += " *" ;
            
            
        }
        //printing each row
        console.log(spaces + pattern);
 

    }
 };
 leftPyramid(5);