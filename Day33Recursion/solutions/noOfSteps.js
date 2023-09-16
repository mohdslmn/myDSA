var numberOfSteps = function (num) {
  return helper(num, 0);
};
function helper(num, count) {
  if (num === 0) {
    return count;
  }
  if (num % 2 === 0) {
    return helper(Math.floor(num / 2), count + 1);
  }
  return helper(num - 1, count + 1);
}

console.log(numberOfSteps(14)); //6

//another way of solving this problem

var numberOfSteps2 = function(num) {

	if (num == 0)
		return num;

	return 1 + (num % 2 == 0 ? numberOfSteps2(num / 2) : numberOfSteps2(num - 1));

    
};
console.log(numberOfSteps(14)); //6