import { Link } from "react-router-dom";

export default function About() {
	return (
		<>
			<Link to="/">
				<button>Home</button>
			</Link>
			<h1>Welcome to about!</h1>
		</>
	);
}