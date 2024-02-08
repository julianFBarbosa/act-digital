const Pokemon = (props) => {
	// eslint-disable-next-line react/prop-types
	console.log(props.name);
	return (
		<div key={props.name}>
			<p>{props.name}</p>
			<img src={`${SPRITE_URL}${index + 1}.png`} alt={props.name} />
		</div>
	);
};

export default Pokemon;
