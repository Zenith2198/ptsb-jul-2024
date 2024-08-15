//print test function
function printTest() {
	console.log("test!")
	console.log("test2!")
}
printTest();
console.log("---------------")
printTest();
console.log("===============")
printTest();
console.log("+++++++++++++++")
printTest();

//add function
function addTwoNumbers(num1, num2) {
	let result = num1 + num2;
	// console.log("result:", result)
	return result;
}
let eleven = addTwoNumbers(6, 5);
let seven = addTwoNumbers(3, 4);
let eighteen = addTwoNumbers(eleven, seven);
console.log(eighteen);
// console.log(eleven)
// console.log(addTwoNumbers(eleven, 8))

//function expression
const functionName = function(params) {
	console.log(params)
}
functionName("this is a function expression!");

//arrow function
const arrowFunction = (params) => {
	console.log(params)
}
arrowFunction("this is an arrow function!");

function functionFunction(func, args) {
	console.log("this is the beginning of our function function")
	func(args);
	console.log("this is the end of our function function")
}
functionFunction(arrowFunction, "this is a function function argument!");

functionFunction(() => {
	console.log("this is inside an argument!")
});