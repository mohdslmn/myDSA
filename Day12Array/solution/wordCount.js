var wordPattern = function (pattern, s) {
    //First of all, create an array contains words from s.
    
      const arr = s.split(" "),temp = {};
    
    //Check if both has the same length and amount of unique charactors.
      if (arr.length !== pattern.length || 
    new Set([...pattern]).size !== new Set(arr).size) return false;
      
    //Iterate over the pattern. 
    
      for (let i = 0; i < pattern.length; i++) {
        if (!temp[pattern[i]]) {temp[pattern[i]] = arr[i];}
         else if (temp[pattern[i]] !== arr[i]) {return false;}
      }
      return true;
    };

    const pattern = "abba", s = "dog cat cat dog";
    console.log(wordPattern(pattern,s));