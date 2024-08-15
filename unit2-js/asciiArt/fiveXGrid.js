// let text = "";
// for (let i=0; i<5; i++) { //how many rows
// 	for (let j=0; j<5; j++) { //how many columns
// 		text += ".";
// 	}
// 	text += "\n";
// }
// console.log(text);

// for (let i=0; i<5; i++) {
// 	let text = "";
// 	for (let j=0; j<5; j++) {
// 		text += ".";
// 	}
// 	console.log(text);
// }

function xByx(rows, cols) {
	let loop = 0;
	while (loop < rows) {
		let text = "";
		//make text five dots
		for (let dot=0; dot < cols; dot++) {
			text += ".";
		}
		console.log(text);
		loop++;
	}
}

xByx(10, 2)
console.log("")
xByx(7, 15)
console.log("")
xByx(2, 2)
console.log("")
xByx(5, 5)
