var canConstruct = function(ransomNote, magazine) {
    const vocab = {};
     
     for (let letter of magazine) {
         vocab[letter] = ++vocab[letter] || 1;
     }
     
     for (let letter of ransomNote) {
         if (vocab[letter] === 0 || !vocab[letter]) {
             return false;
         }
         vocab[letter]--;
     }
     
     return true;
 };

 const ransomNote = "aa", magazine = "aab" ;
 console.log(canConstruct(ransomNote,magazine)); //true