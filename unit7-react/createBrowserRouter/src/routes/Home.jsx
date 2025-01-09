import { Link, Outlet } from "react-router-dom";

export default function Home() {
	return (
		<>
			<header>
				<Link to="/">
					<button>Home</button>
				</Link>
				<Link to="/about">
					<button>About</button>
				</Link>
				<Link to="/contact">
					<button>Contact</button>
				</Link>
			</header>
			<h1>React Router Demo 2</h1>
			<Outlet />
		</>
	);
}