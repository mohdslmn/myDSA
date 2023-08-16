var defangIPaddr = function(address) {
    let res = "";
    
    for(let ch = 0; ch < address.length ; ch++){
        if(address[ch] === "."){
            res += "[.]";
        }
        else{
            res += address[ch];
        }
    }
    return res;
};

const address = "1.1.1.1" ;

console.log(defangIPaddr(address)); // 1[.]1[.]1[.]1