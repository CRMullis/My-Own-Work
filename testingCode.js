// console.log(Object.getOwnPropertyNames(Function.prototype))

var tester = function (a, b, c) {
	console.log({
	this: this,
	a: a,
	b: b,
	c: c
	});
};
// tester.call("num","a","b","c");
tester.apply(window, ["This", "is", "cool"]);
