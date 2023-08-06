var findWinners = function(matches) {
    var looser = {};
    var allPlayer={};
    for(var i=0; i<matches.length; i++)
        {   
            if(looser[matches[i][1]])
                looser[matches[i][1]]++;
            else
                looser[matches[i][1]]=1
            
            if(!allPlayer[matches[i][0]])
                allPlayer[matches[i][0]]=1
            if(!allPlayer[matches[i][1]])
                allPlayer[matches[i][1]]=1
        }
    var first=[], second=[];
    for(var key in allPlayer)
        {
            if(!looser[key])
                first.push(key);
            if(looser[key] == 1)
                second.push(key);
        }
    return [first, second]
};
   



const matches = [[1,3] , [2,3] , [3,6], [5,6] , [5,7], [4,5],[4,8],[4,9],[10,4],[10,9]];

const res =   findWinners(matches);

  
 
console.log(res); //[ [ '1', '2', '10' ], [ '4', '5', '7', '8' ] ]

//tc : O(n)