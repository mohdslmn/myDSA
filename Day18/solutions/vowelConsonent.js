var countVowelConsonent = function (str) {
  let vowel = (consonent = 0);

  for (let c = 0; c < str.length; c++) {
    if (str[c] === "a" || str[c] === "e" || str[c] === "i" || str[c] === "o" ||str[c] === "u") {
      vowel++;
    } else {
      consonent++;
    }
  }
  return {
    vowel,
    consonent,
  };
};
console.log(countVowelConsonent("abcdefghijklmnopqrstuvwxyz")); // { vowel: 5, consonent: 21 }
