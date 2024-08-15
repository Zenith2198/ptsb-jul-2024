let myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("We're done!");
	}, 2000); //done after 2 seconds
});

console.log(1);

myPromise.then((result) => {
	console.log(result);
});

console.log(2);

setTimeout(() => {
	console.log(3)
}, 500);

console.log(4);