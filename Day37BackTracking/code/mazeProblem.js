
// this code returns the total no. of paths to reach from start to destination in 2D- Array
// Maze problem
function count(r,c){
    if(r === 1 || c === 1){
        return 1;
    }
    let left = count(r - 1 ,c);
    let right = count(r, c - 1);

    return left + right;
}
console.log(count(3,3)); //6


// it will print the path also such as RR, DD , DR , RD etc..
function path(p , r, c){
 if( r === 1 && c === 1){
    console.log(p);
    return;
 }
 if( r > 1){
    path(p + "D"  , r-1 , c);
 }
 if(c > 1){
    path( p  + "R"  , r , c - 1);
 }
}
path("" , 3 , 3); 
/*
DDRR
DRDR
DRRD
RDDR
RDRD
RRDD
*/
// it will return all path including diagonal
function allPathsDiagonal(p , r , c){
    if(r === 1 && c === 1){
        let list = new Array();
        list.push(p);
        return list.toString();
    }
    let list = new Array();

    if(r > 1 && c > 1){
        list.push(allPathsDiagonal(p + 'D', r - 1, c - 1));
    }
    if(r > 1){
        list.push(allPathsDiagonal(p + 'V' , r - 1 , c)); // vertical
    }
    if(c > 1){
        list.push(allPathsDiagonal(p + "H" , r,  c- 1)); // horizontal
    }
    return list.toString();
}
console.log(allPathsDiagonal("", 3, 3)); // DD,DVH,DHV,VDH,VVHH,VHD,VHVH,VHHV,HDV,HVD,HVVH,HVHV,HHVV