var results = 0
//var sum = 0
function add()
  {
	for(var i=0; i<arguments.length; i++)
	  {
//		 sum += arguments[i];
		 results += arguments[i];
	  }
//	return sum
	return results
}
function subtract()
  { 
	var diff = 0
	for(var i=0; i<arguments.length; i++)
	  {
		 diff = arguments[0]
		 diff -= arguments[i];
	  }
	return diff 
}
function multiply()
  {
	var prod = 1 
	for(var i=0; i<arguments.length; i++)
	  {
		prod = prod * arguments[i];
	  }
	return prod
}
function divide()
  {
	var quot = 0
	for(var i=0; i<arguments.length; i++) 
	  {
		quot = arguments[0]
		quot = quot/arguments[i]
	  }
	return quot
}


console.log(add(1,2,3,4,5));
//console.log(subtract(15,10));
//console.log(multiply(1,5,10));
//console.log(divide(10,2));
console.log(results);

