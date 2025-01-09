export default function ListRenderer({ listToRender }) {
	return (
		<>
			{listToRender.map((e, i) => (
				<div key={i}>
					{e}
				</div>
			))}
		</>
	);
}