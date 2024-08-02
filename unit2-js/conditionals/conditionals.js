// if statements
if (false) {
	console.log("this is the if statement!");
}

if (!false) {
	console.log("this is not false");
}

if (false || true) {
	console.log("this is false or true");
}

if (false && true) {
	console.log("this is false and true");
}

let hw1 = 85;
console.log("Homework 1 grade:");
if (hw1 >= 95) {
	console.log("they got an A!");
}
if (hw1 >= 85) {
	console.log("they got an B!");
}
if (hw1 >= 75) {
	console.log("they got an C!");
}
if (hw1 >= 65) {
	console.log("they got an D!");
}
if (hw1 < 65) {
	console.log("they got an F!");
}

//else statements
let proj1 = 77;
if (proj1 >= 80) {
	console.log("they passed the first project!");
} else {
	console.log("they did NOT pass the first project");
}

//else if
let hw2 = 98;
console.log("Homework 2 grade:");
if (hw2 >= 95) {
	console.log("A");
} else if (hw2 >= 85) {
	console.log("B");
} else if (hw2 >= 75) {
	console.log("C");
} else if (hw2 >= 65) {
	console.log("D");
} else {
	console.log("F");
}

//no else
let proj2 = 90;
if (proj2 >= 80) {
	console.log("they passed the second project!");
}
// console.log("they did NOT pass the second project"); //need to use else statement!

//pemdas in code (order of operations)
let a = true;
let b = false;
let c = true;
console.log("pemdas:");

if ((a && b) || c) {
	console.log("condition 1");
}

if (a && b || c) {
	console.log("condition 2");
}

if (a || b && c) {
	console.log("condition 3");
}

if ((a || b) && c) {
	console.log("condition 4");
}

if ((a || c) && b) {
	console.log("condition 5");
	b = true;
}
if ((a || c) && b) {
	console.log("condition 5.5");
}