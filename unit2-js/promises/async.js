async function main() {
	async function pokeFetch() {
		const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
		const ditto = await response.json();
		return ditto;
	}

	const ditto = await pokeFetch();
	console.log(ditto.height);
}

main();