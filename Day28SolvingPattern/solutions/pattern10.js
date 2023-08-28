function pattern10(n) {
   
  for(let row = 1 ; row <= n ; row++){
    let pattern =' ';
    let spaces = '';

    for(let s = 0 ; s < n - row; s++){
        spaces += "  ";
    }
    for(let col = row ; col >=1 ; col--){
        
        pattern += col + " ";
    }
    for(let col = 2; col <= row ; col++){
    
        pattern += col + " ";
    }
    console.log(spaces + pattern)
  }
}
pattern10(9);
