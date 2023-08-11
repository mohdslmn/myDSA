
var infiniteArray = function(arr,target){
    let start = 0;
    let end = 1;
    //let new_start = 0;
    while(target > arr[end] ){
        let new_start = end + 1 ;
        end = end + (end - start + 1) * 2;
        start = new_start;
    }
    return binarySearch(arr,target,start,end);

}
var binarySearch = function(arr,target,start,end){
    
 
    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
    
        if (arr[mid] === target) {
          return mid;
        } 
        else if (target < arr[mid]) {
          end = mid - 1;
        } 
        else {
          start = mid + 1;
        }
      }
      return -1;
    };

    const arr = [3,5,7,9,10,90,130,140,160,170];
    const target = 170;

   console.log(infiniteArray(arr,target)); // 9
    
    