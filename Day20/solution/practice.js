//slice():
// const s = "hello World";

const { chownSync } = require("fs");

// console.log(s.slice(2)); //llo World =>first 2 elemnt remove kr dega.

// console.log(s.slice(2,8));// llo Wo  =>2 se 7 index tak print kr dega

// console.log(s.slice(-2)); //last two element print kr dega.
// console.log(s.slice(-2,0)); // no effect

// console.log(s.slice(0,-2)); // ab ye 0 se last do character se pehle tak print kra dega

// console.log(s.slice(-5)); // agr negative index de rhe h toh dono negative index dena hoga and 2nd argmnt jo h bda hona chahiye first argmnt se.

// console.log(s.slice(-6,-1)); //Worl => pehle -6 index reverse se and phir -1 pe dono ke beecha ka elemnt dega

//.split() & .join() & replace

// console.log(s.split(" ").join('').replace(s[0],"H")); //HelloWorld

//splice:
// const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Remove elements from index 2 to 4 and replace with new elements
// const removedElements = myArray.splice(2, 3, 'a', 'b', 'c');

// console.log(myArray);         // Outputs: [0, 1, 'a', 'b', 'c', 5, 6, 7, 8, 9]
// console.log(removedElements); // Outputs: [2, 3, 4]

// const ch = "abc def ghi jkl";
// const ch1 = ch.split(" ");
// ch1.splice(1,3, 'mno' , 'pqr','xyz'); //[ 'abc', 'mno', 'pqr' ] => first argmnt is for  elemnt ko kaha se replace krna h and second argmnt kaha tak krna h and 3rd and 4th argmnt new item jisse array ko replace krna h
// console.log(ch1);

// ch1.splice(0,3,"urs","xyz");
// console.log(ch1);

// ch1.splice(1,0,'mno' , 'pqr','xyz');
// console.log(ch1); //[
"abc", "mno", "pqr", "xyz", "def", "ghi", "jkl";
//]  2nd argmnt 0 dene se elemnt replace nhi hoga bass add ho jyngeh start index pe means jo first agmnt me index diya h uspe.

/*
function findAllSubstrings(str) {
  const substrings = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      if(i === 0 && j === str.length ){
        continue;
      }
      substrings.push(str.substring(i, j));
    }
  }

  return substrings;
}

const inputString = "babad";
const allSubstrings = findAllSubstrings(inputString);

console.log("All Substrings:");
console.log(allSubstrings);


var longestPalindromeSubstring = function (str) {
  let res = "";
  const isPalindrome = (substr) => {
    const len = substr.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (substr[i] !== substr[len - 1 - i]) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const substr = str.substring(i, j);
      if (isPalindrome(substr)) {
        res += substr + "";
      }
    }
  }
  console.log(res.length);
  if (res.length > 1) {
    let new_Res = res.split("");
    console.log(new_Res);

    let lengthOfPalindrome = [];
    for (let i = 0; i < new_Res.length; i++) {
      lengthOfPalindrome.push(new_Res[i].length);
    }

    let max = Math.max(...lengthOfPalindrome);

    return new_Res[max];
  }
  return res;
};

console.log(longestPalindromeSubstring("babad"));




const s = "codeleet" , indices = [4,5,6,7,0,2,1,3];

let map = new Map();

    for(let i = 0; i < indices.length ; i++){
            map.set(indices[i],s[i]) ;
    }

    // console.log(map);
    const sortedEntries = Array.from(map.entries()).sort(([a],[b]) => a - b);
    console.log(sortedEntries);

    const sortedMap = new Map(sortedEntries);

    let res = "";
    // console.log(res);

// Iterate over the sorted Map
sortedMap.forEach((value) => {
   res += value + '';
})
console.log(res);

*/
    

/*
    const myMap = new Map();
myMap.set('banana', 3);
myMap.set('apple', 1);
myMap.set('orange', 2);

// Convert the Map into an array of key-value pairs and sort it based on keys
const sortedEntries = Array.from(myMap.entries()).sort(([keyA], [keyB]) => keyA.localeCompare(keyB));

// Reconstruct the sorted Map from the sorted array
const sortedMap = new Map(sortedEntries);

// Iterate over the sorted Map
sortedMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
*/

/*
var interpret = function(command) {
  let res = '';
  let charArray = command.split(" ");
  console.log(charArray);

  for (let i = 0; i < charArray.length; ) {
      if (charArray[i] === "G") {
          res += "G";
          i++;
      } else if (charArray[i] === "()") {
          res += "o";
          i += 2; // Skip the next 2 characters for "()"
      } else if (charArray[i] === "(al)") {
          res += "al";
          i += 4; // Skip the next 4 characters for "(al)"
      }
  }

  return res;
};
interpret();
// Test cases
console.log(interpret("(al)G(al)()()G")); // Should output "alGalooG"
*/
console.log("(al)G(al)()()G".split("()").join("o")); // [ '(al)G(al)', '', 'G' ]