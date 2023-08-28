let n = 5;
let total = n;
for(let row = 1 ; row <= n - 1; row++){
    let pattern = '';
    let spaces = "";
  
   
    // let totalColsInRows = row > 1? total  : n ; 
    for(let k = 1 ; k <= n - total ; k++){
        spaces += " ";
    }
 
  
    for(let col = 1 ; col <= total ; col++){
        pattern += " *";

    }
    total = total - 1;
    console.log(spaces + pattern);
}
let space = " ";
for(let i = 0; i < n - 1; i++){
    space += " ";
}
console.log(space+"*")

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
