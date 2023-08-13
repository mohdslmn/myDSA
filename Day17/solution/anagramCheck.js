//Anagrams are basically those strings which have same length with same occurence of letters but different in arrangement
var checkAnagram = function (str1, str2) {

    if(str1.length !== str2.length){
        return false;
    }
  let frequecyCount = {};

  for (let s = 0; s < str1.length; s++) {
    // frequecyCount1[s] = frequecyCount1[s];
    // console.log(frequecyCount1)printing undefine for each characters so assign 0

    if (!frequecyCount[str1[s]]) {
      // if character doesnot exist , assign 0 in it bcoz in JS letters of string will be undefined so assigning 0 in it
    
      frequecyCount[str1[s]] = 0;
    }

    frequecyCount[str1[s]]++;
  }
    //can also write this as frequecyCount[char] = (frequecyCount[char] || 0) + 1
      // then dont need to write this  frequecyCount[str2[s]]++;

  for (let char of str2) {
    //inside loop char will be containing characters of string2
    //so i will check char's exist in ferquencyCount or not
    if (!frequecyCount[char]) // using ! simple return char of string2 is not in frequencyCount
    {
      return false;
    }
    frequecyCount[char]--; // if yes then decremnt the count of characters like it was 1 after this statemnt will 0
  }
  return true;
};

const str1 = "listen";
const str2 = "silent";

console.log(checkAnagram(str1, str2));

// O(n) : linear