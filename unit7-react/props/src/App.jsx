import { useState } from "react";
import "./App.css";
import ChildComponent from "./components/ChildComponent";
import ListRenderer from "./components/ListRenderer";
import ObjectRenderer from "./components/ObjectRenderer";

function App() {
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(100);

  	return (
		<>
			<div className="counter">Jim: {count}</div>
			<div className="counter">Bethany: {count2}</div>
			<div>Difference: {Math.abs(count2-count)}</div>
			<ChildComponent name="Jim" countUp={() => setCount(count+1)}></ChildComponent>
			<ChildComponent name="Bethany" countUp={() => setCount2(count2+1)}></ChildComponent>
			<ListRenderer listToRender={[1, 2, 3, 4, 5]}></ListRenderer>
			<ObjectRenderer objectToRender={{one: 1, two: 2, three: 3}}></ObjectRenderer>
		</>
	);
}

export default App;
