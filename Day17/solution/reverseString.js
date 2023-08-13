 //without loop and built-in methods
 var reverseString = function(str){
    //base case when str is empty
    if (str === "") {
        return "";
      } else {
        return reverseString(str.substr(1)) + str.charAt(0); //concatenation from last character to first
      }
 };

 let str= "Hello";

 console.log(reverseString(str));

 // loop method
 let new_s= "";
 for(let s = str.length -1; s >= 0; s--){
   
   new_s =  new_s +str[s] ;
   }
 console.log(new_s);

 //built-in methods
//split() => array of characters ka string bna dega
//join() => convert back into string 
 console.log(str.split("").reverse().join("-"));