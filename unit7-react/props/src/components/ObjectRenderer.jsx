export default function ObjectRenderer({ objectToRender }) {
	return (
		<>
			{Object.entries(objectToRender).map(([key, value]) => (
				<div key={key}>
					<h1>{key}</h1>
					<h2>{value}</h2>
				</div>
			))}
		</>
	);
}