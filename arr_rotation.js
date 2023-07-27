

function rotation(nums,k){
for (let i = nums.length - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  //console.log(nums);
  for (let j = k - 1; j >= 0; j--) {
    nums[j] = nums.pop();
  }
console.log(nums);
}

const nums = [1,2,3,4];
let k = 2;
rotation(nums,2);

/*
function reverse(nums2,k){
    let temp = 0;
    let j =  nums2.length - 1;
   
    for(let i = 0 ; i <= j ; i++){
   
        temp = nums2[i] ;
        nums2[i] = nums2[j];
        nums2[j] = temp;
        j--;
    }

    console.log(nums2);
}
    
const nums2 = [1,2,3,4,5];

*/