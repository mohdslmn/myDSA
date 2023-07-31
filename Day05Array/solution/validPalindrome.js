

var isPalindrome = function(s){
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (!isAlphaNumeric(s[left]))
            left++;
        else if (!isAlphaNumeric(s[right]))
            right--;
        else if (s[left].toLowerCase() !== s[right].toLowerCase())
            return false;
        else {
            left++;
            right--;
        }
    }
    return true;
}

function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);
    return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

let s  = "A man, a plan, a canal: Panama" ;//true
let s1 = "race a car" ; //false
const res = isPalindrome(s1);
console.log(res);

//Complexity:
//The time complexity of this solution is O(n), where n is the length of the input string s. We iterate through the string once.
//The space complexity is O(1) because we are using a constant amount of extra space for the pointers and temporary variables.
