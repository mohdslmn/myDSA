var fn = function (str) {
  

  if (str.includes("S;M;")) {
    
    str = str.slice(0, -2);
    console.log(str); // remve ()

    let charArray = str.split("");
    charArray.splice(0, 4); // remove S;M;

    let newStr = charArray.join("");
    console.log(newStr); //simple str
    let res = newStr[0];

    for (let c = 1; c < newStr.length; c++) {
      const curr = newStr[c];
      if(curr === curr.toUpperCase()){
        res += " ";
  
      }
      res += curr.toLowerCase();
    }
    return res;
     
  }

  if (str.includes("C;V;")) {
    let charArray = str.split("");
    //    console.log(newStr)
    charArray.splice(0, 4);
    //    console.log(newStr);

    let res = "";
    let newStr2 = charArray.join("");
    // console.log(newStr2);

    for (let c = 0; c < newStr2.length; c++) {
      if (newStr2[c] === " ") {
        res = newStr2
          .split(" ")
          .join("")
          .replace(newStr2[c + 1], newStr2[c + 1].toUpperCase());
      }
    }

    return res;
  }

  if (str.includes("C;C;")) {
    let charArray = str.split("");
    charArray.splice(0, 4);

    let res = "";
    let newStr = charArray.join("");

    // let stringWithoutSpaces = newStr.split(' ').join('');
    // console.log(newStr);

    for (let c = 0; c < newStr.length; c++) {
      if (newStr[c] === " ") {
        let capital = newStr[c + 1].toUpperCase();
        res = res = newStr
          .split(" ")
          .join("")
          .replace(newStr[c + 1], newStr[c + 1].toUpperCase());

        res = res.charAt(0).toUpperCase() + res.slice(1);
      }
    }
    return res;
  }

  
  if (str.includes("S;C;")) {

    let charArray = str.split("");
    charArray.splice(0, 4); // remove S;C;

    let newStr = charArray.join("");
    // console.log(newStr); //simple str
    let res = newStr[0].toLowerCase();

    for (let c = 1; c < newStr.length; c++) {
      const curr = newStr[c];
      if(curr === curr.toUpperCase()){
        res += " ";
  
      }
      res += curr.toLowerCase();
    }
    return res;
     
  }
  if (str.includes("C;M;")) {

    let charArray = str.split("");
    charArray.splice(0, 4); // remove S;C;

    let newStr = charArray.join("");
    // console.log(newStr);
    let res = newStr[0];

    for (let c = 1; c < newStr.length; c++) {
      const curr = newStr[c];
      const prev = newStr[c - 1];

      if(prev === " "){
        
        res += curr.toUpperCase();
      }
      else if(curr !== " "){
      res += curr;
      }
    }
    res += "()";
 return res;

  
  }

  if (str.includes("S;V;")) {

    let charArray = str.split("");
    charArray.splice(0, 4); // remove S;C;

    let newStr = charArray.join("");
    // console.log(newStr);
    let res = newStr[0];

    for (let c = 1; c < newStr.length; c++) {
      const curr = newStr[c];
      if(curr === curr.toUpperCase()){
        res += " ";
  
      }
      res += curr.toLowerCase();
    }


  return res;
  }
};



const str = "C;C;code swarm"; // CodeSwarm

console.log(fn(str));