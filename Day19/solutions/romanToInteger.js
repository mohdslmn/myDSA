var romanToInt = function(s) {
    
    let array = [
      {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
      },
    ];
    let count = 0;
    for (let i=0;i<s.length;i++) {
     let currentValue = array[0][s[i]]; // here accessing value of given string by each character and getting its value from array of object.
      if (i + 1 < s.length && array[0][s[i+1]] > currentValue) {
        //checking if next char is greater than previous bcoz if next char is grtr, then substract the currentvalue from count this is for basically these cases : IX , IV , XC means jo value current char ka h say I , toh isko minus kr dengeh previous count se and uske baad next char ko add kr dengeh then we will get the result.
        count -= currentValue;
    } else {
        count += currentValue;
    }
    }
    return count
    };

const s = "IIIV";
console.log(romanToInt(s));
