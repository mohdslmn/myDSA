//solving by two pointers 
var validPalindrome = function(str){
 // taking 2 variables 
 let left = 0;
 let right = str.length - 1;


 while(left < right){
    // we will check in the manner such as if str[left] !== str[right] return false else right-- and left ++
   
    //checking each char is  alphanumeric or not
    if(!isAlphanumeric(str[left])){  // isAlphanumeric(str[left]) !== true
        left++;
    }
    else if(!isAlphanumeric(str[right])){
        right--;
    }
    else if(str[left].toLowerCase() !== str[right].toLowerCase()){
        return false;
    }
    else{
        left++;
        right--;
    }
    
 }
 return true;
};
function isAlphanumeric(char){
    const code = char.charCodeAt(0);

    return (code >= 48 && code <= 57) || (code >=65 && code <= 90) || (code >= 97 && code <= 122 );
}

const str = " ";
console.log(validPalindrome(str));
console.log(isAlphanumeric(' '));