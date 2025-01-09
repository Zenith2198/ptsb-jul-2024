import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<header>
				<Link to="about">
					<button>About</button>
				</Link>
				<Link to="contact">
					<button>Contact</button>
				</Link>
			</header>
			<main>
				<h1>Welcome to home!</h1>
			</main>
		</>
	);
}