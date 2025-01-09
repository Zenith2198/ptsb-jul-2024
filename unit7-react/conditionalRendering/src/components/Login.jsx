export default function Login({ onLogin }) {
	return (
		<>
			<input placeholder="Username"></input>
			<input placeholder="Password" type="password"></input>
			<button onClick={onLogin}>Log In</button>
		</>
	);
}