var maxOccurence = function (str) {
    //if str is is empty 
  if (str === "") {
    return "";
  }
  let map = new Map();
  let max = 0;
  let ans = 0;

  for (let i = 0; i < str.length; i++) {
    //in map store each char of str as key and count of element as value 
    map.set(str[i], (map.get(str[i]) || 0) + 1);
    //for maxOccurence char assign it into ans. max will contain value
    if (max < map.get(str[i])) {
      ans = str[i];
      max = map.get(str[i]);
    }
  }

  return ans;
};
console.log(maxOccurence("gfggfgeeeee"));
