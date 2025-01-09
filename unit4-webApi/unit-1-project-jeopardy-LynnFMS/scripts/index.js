import placeholderQuestions from "./placeholder-questions.js";

const BOARD_ROWS = 5;

//remove final question because it has unique category
const finalQuestion = placeholderQuestions.pop();

//build object whose keys are each category, and whose values are arrays of each question in that category
let categories = {};
placeholderQuestions.forEach((e) => {
	if (categories[e.category]) { //does the key exist?
		categories[e.category].push(e);
	} else {
		categories[e.category] = [e];
	}
});
console.log(categories)

const board = document.getElementById("board");
//create the category labels
for (let catName of Object.keys(categories)) {
	let catLabel = document.createElement("div");
	catLabel.innerHTML = catName;
	board.appendChild(catLabel);
}

//create the questions
for (let i = 0; i < BOARD_ROWS; i++) {
	for (let catArray of Object.values(categories)) {
		let boardSquare = document.createElement("div");
		boardSquare.innerHTML = (i + 1) * 200;
		//event listener to change text of element to question when clicked on
		boardSquare.addEventListener("click", () => {
			boardSquare.innerHTML = catArray[i].question;
			//disable click events for ALL elements in grid
			for (let child of board.children) {
				child.style.pointerEvents = "none";
			}
		});
		board.appendChild(boardSquare);
	}
}