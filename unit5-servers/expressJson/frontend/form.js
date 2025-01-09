import "dotenv/config";

document.getElementById("form").addEventListener("submit", async (e) => {
	e.preventDefault();
	let response = await fetch(`http://localhost:${process.env.PORT}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username: e.target.username.value,
			email: e.target.email.value
		})
	});
	let result = await response.json();
	console.log(result)
});