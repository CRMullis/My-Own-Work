function adds(x,y) {
	return x + y;
}
function add(f) {
	return function() {
		return f.apply(adds, arguments); 
};
}
console.log(add(1))
