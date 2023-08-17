var rotateString = function(s, goal) {
    
    for(let char = 0 ; char < s.length ; char++){
        s = s.slice(1) + s[0] ;

        if(s === goal){
            return true;
        }
    }
    return false;
};

const  s = "abcde", goal = "cdeab" ;
console.log(rotateString(s,goal));