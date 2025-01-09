import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';

function App() {
	const [pokemon, setPokemon] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [page, setPage] = useState(1);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			try {
				const offset = (page - 1) * 10;
				const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
				const data = await response.json();
				setPokemon(data.results);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, [page]);

	async function navPages(dir) {
		if (page+dir >= 1) {
			setPage(page+dir);
		}
	}

	return (
		<>
			<div>
				<h1>Pokemon</h1>
				{loading ?
					<div>
						<h2>1</h2>
						<h2>2</h2>
						<h2>3</h2>
						<h2>4</h2>
						<h2>5</h2>
						<h2>6</h2>
						<h2>7</h2>
						<h2>8</h2>
						<h2>9</h2>
						<h2>10</h2>
					</div>
				:
					pokemon.map((poke, i) => (
						<div key={i}>
							<h2>{poke.name}</h2>
						</div>
					))
				}
			</div>
			<div>
				<button onClick={() => navPages(-1)}>Previous</button>
				Page {page}
				<button onClick={() => navPages(1)}>Next</button>
			</div>
		</>
	);
}

export default App
