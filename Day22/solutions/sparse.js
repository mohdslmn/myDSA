function matchingStrings(strings, queries) {
    let res = [];
    let count = 0;
    for(let i = 0; i < queries.length ; i++){
      for(let j = 0 ; j < strings.length; j++){
          
          if(queries[i] === strings[j]){
              count++;
          }
          
      }
      res.push(count);
      count = 0;
  }
  return res;
};

const strings = ["aba","baba","aba","xzxb"];
const queries = ["aba","xzxb","ab"];
console.log(matchingStrings(strings,queries)); // [2,1,0]

