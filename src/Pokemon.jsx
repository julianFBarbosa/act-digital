/* eslint-disable react/prop-types */
import { getSpriteUrl } from "./helpers";

const Pokemon = ({ data }) => {
	console.log(data.name);

	return (
		<div key={data.name}>
			<p>{data.name}</p>
			<img src={getSpriteUrl(data.url)} alt={data.name} />
		</div>
	);
};

export default Pokemon;
