import { Router } from "express";

const router = Router();

router.get("/", (request, response) => {
	response.send({ response: "Welcome to home." });
});

router.post("/", (request, response) => {
	console.log(request.body);
	response.send({ response: "Request received!" });
});

export default router;