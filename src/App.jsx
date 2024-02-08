import { useEffect, useState } from "react";
import { PokemonService } from "./services/PokemonService";
import { SPRITE_URL } from "./CONSTANTS";
import { Pagination } from "@mui/material";
import { getPageQuantity } from "./helpers";

function App() {
	const [pokemonList, setPokemonList] = useState(null);
	const [pageQuantity, setPageQuantity] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const response = await PokemonService.getPokemons();

			console.log("response", response);

			setPokemonList(response);
			setPageQuantity(getPageQuantity(response.count));
		}

		fetchData();
	}, []);

	const handleChange = async (event, page) => {
		page -= 1;
		const offset = page * 20;

    const response = await PokemonService.getPokemons(offset);
    console.log('response', response)
	};

	if (!pokemonList) {
		return <p>carregando</p>;
	}

	return (
		<div>
			<p>PokeList</p>
			{pokemonList.results.map((element, index) => (
				<div key={element.name}>
					<p>{element.name}</p>
					<img
						src={`${SPRITE_URL}${index + 1}.png`}
						alt={element.name}
					/>
				</div>
			))}
			<Pagination
				count={pageQuantity}
				onChange={(event, page) => handleChange(event, page)}
			/>
		</div>
	);
}

export default App;
