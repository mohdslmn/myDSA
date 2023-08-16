    let count = 1;
    let res = "";
    for(let ch = 0 ; ch < str.length ; ch++){
        //if next char is equal increase count
        if(str[ch] === str[ch + 1]){
            count++;
        }
        else{
            //else , appending in result character with its count
            res += str[ch] + count;
            //again count will be start from 1
            count = 1;
        }
    }
    // if you have a string like "abcde", compressing it would result in "a1b1c1d1e1", which is longer than the original. not efficient so checking this condition
    return res.length < str.length ? res : str ;