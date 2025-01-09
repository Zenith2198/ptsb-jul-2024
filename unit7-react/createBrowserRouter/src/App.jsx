import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
			children: [
				{
					path: "",
					element: <h1>Welcome to home!</h1>
				},
				{
					path: "about",
					element: <h1>Welcome to about!</h1>
				},
				{
					path: "contact",
					element: <h1>Welcome to contact!</h1>
				}
			]
		}
	]);

	return (
		<RouterProvider router={router} />
	);
}

export default App;
