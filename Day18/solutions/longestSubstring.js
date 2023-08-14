
var longestSubstring = function(str){
    // taking set to assign substring
    let set = new Set();
    let left = 0;
    let maxSize = 0;

    for(let i = 0 ; i < str.length; i++){

        //running another while loop to check if substring is repeating it self
        while(set.has(str[i])){
            set.delete( str[left]);
            left++;
        }
        //otherwise substring is added into set
        set.add(str[i]);
        //maxSize calculating the max size of curr_char[i] - left(deleted char count) + 1
        maxSize = Math.max(i - left + 1);
    }
    return {
        maxSize,
        set,
    }
  
};
console.log(longestSubstring("pwwkew"));