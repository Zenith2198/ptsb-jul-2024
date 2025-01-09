import fs from "fs";
import test from "./routes/test.js";

fs.writeFile("example.json", JSON.stringify({
	name: "PTSB July 2024",
	instructor: "Carter",
	TA: "Steven",
	students: []
}, 0, 4), (err) => {
	if (err) {
		console.log("error!");
		console.log(err);
	}
});

test()