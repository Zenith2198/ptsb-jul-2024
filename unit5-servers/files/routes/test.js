import fs from "fs";

export default function test() {
	fs.readFile("example.json", (err, data) => {
		let fileContent = JSON.parse(data);
		console.log(fileContent)
	});
}
