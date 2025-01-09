//const {MongoClient} = require('mongodb'); //without "type": "module"
import { MongoClient } from "mongodb"; //with "type": "module"
import express from "express";

const app = express();
app.use(express.json());

const client = new MongoClient("mongodb://localhost:27017/");

async function dbConnect() {
	await client.connect();

	const db = client.db("usersDB"); //connect to a database
	const collection = db.collection("users"); //connect to a collection

	return collection;
}

app.get("/", async (req, res) => {
	const coll = await dbConnect();

	const users = await coll.find().toArray();

	res.send({
		users
	});
});

app.post("/", async (req, res) => {
	const coll = await dbConnect();

	const newUser = await coll.insertOne(req.body);

	res.send({
		result: "Success"
	});
});

app.listen(3000, () => {
	console.log("App is now listening on port 3000.");
})