export default function ChildComponent({ name, countUp }) {
	return (
		<div>
			<div>
				Hello Parent, I am the Child! My name is {name}.
			</div>
			<button onClick={countUp}>{name} Count Up</button>
		</div>
	);
}