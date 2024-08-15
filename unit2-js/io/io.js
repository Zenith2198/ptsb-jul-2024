console.log("Echo:");
process.stdin.once("data", (input) => {
	console.log(input.toString());
});
