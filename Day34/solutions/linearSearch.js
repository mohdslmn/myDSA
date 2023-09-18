function find(arr, index, elem) {
  if (index === arr.length) {
    return false;
  }
 

  return arr[index] === elem || find(arr, index + 1, elem);
}
function findIndex(arr, index , elem){
    if(index === arr.length){
        return -1;
    }
    if(arr[index] === elem){
        return index;
      }
    return arr[index] === elem || findIndex(arr, index + 1 , elem);
}
function findAllIndex(arr, index , elem, res = []){
    if(index === arr.length){
        return res ;
    }
    if(arr[index] === elem){
        res.push(index);
        // return res;;
      }
    return findAllIndex(arr, index + 1 , elem , res);
}
const arr = [1, 2, 5, 6,5,19];

console.log(find(arr, 0, 5)); //true
console.log(findIndex(arr, 0, 5));  // 2

console.log(findAllIndex(arr, 0, 5)); //[2,4]
