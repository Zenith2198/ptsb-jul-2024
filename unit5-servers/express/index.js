import express from "express";

const app = express();
const port = 3000;

app.get("/", (request, response) => {
	response.send("Hello World!");
});

app.get("/users/:userId", (request, response) => {
	response.send(request.params);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}.`);
});