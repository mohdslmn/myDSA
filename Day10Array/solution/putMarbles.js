//in this ques main apparoach is to find pattern, such as i found pattern like take sum of cosecutive elemnts 
//i.e (n-1) and cancel 1st and last elemnt occuring in every possible pair.
var putMarbles = function(weights, k) {
    let pairSum = new Array(weights.length - 1);
    for(let i =0; i < pairSum.length; i++){
        pairSum[i] = weights[i] + weights[i + 1];
    }
    pairSum.sort((a,b) =>  a - b);

    let res = 0;
   
    for(let i = 0; i < k-1; i++){
        res += pairSum[pairSum.length - 1 - i] - pairSum[i] ;
    }
    return res;
    
};
const nums = [1,3,5,1];
const k = 2;
console.log(putMarbles(nums,k));  //4

//TC:  O(nlogn)
//SC : O(n) for storing costs