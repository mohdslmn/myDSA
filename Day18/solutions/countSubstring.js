function isVowel(vowel_set,str){
    for(let ch of vowel_set){
        //checking vowel_set char belongs to str or not 
        const check = str.includes(ch);
        if(check === false) return false;

    }
    return true;
}
var countVowelSubstrings = function(word) {
   let vowel = new Set(['a','e','i','o','u']);

   let left = 0;
   let right = 0;
   let temp_str = "";
   let result = 0;

   while(left <= word.length - 5){


       const  curr = word[right];
       //checking current char is vowel or not
       if(vowel.has(curr)){
           //if vowel assign into temp
           temp_str += curr;

           //CHECK IF TEMP STRING LENGTH IS >= 5 and this current temp string belongs to str
           if(temp_str.length >= 5 && isVowel(vowel, temp_str)){
               result++;
           }
             right++;
       }
       //if current char is not vowel
       else{
           left++;
           temp_str = "";
           //update right coz breaks th chain
           right = left ;

       }
     
   }
   return result;

};

 const word = "aeiouu" ;
 console.log(countVowelSubstrings(word)); //2