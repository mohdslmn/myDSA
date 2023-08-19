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