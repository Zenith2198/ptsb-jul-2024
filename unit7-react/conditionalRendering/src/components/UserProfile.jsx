export default function UserProfile({ onLogout }) {
	return (
		<>
			<div>You are logged in!</div>
			<button onClick={onLogout}>Log Out</button>
		</>
	);
}