import { useEffect, useState } from "react";
import { PokemonService } from "./services/PokemonService";
import { Pagination } from "@mui/material";
import { getPageQuantity } from "./helpers";
import Pokemon from "./Pokemon";

function App() {
	const [pokemonList, setPokemonList] = useState(null);
	const [pageQuantity, setPageQuantity] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const response = await PokemonService.getPokemons();

			setPokemonList(response);
			setPageQuantity(getPageQuantity(response.count));
		}

		fetchData();
	}, []);

	const handleChange = async (page) => {
		page -= 1;
		const offset = page * 20;

		const response = await PokemonService.getPokemons(offset);
		setPokemonList(response);
	};

	if (!pokemonList) {
		return <p>carregando...</p>;
	}

	return (
		<div>
			<p>PokeList</p>
			{pokemonList.results.map((element) => (
				<Pokemon key={element.name} data={element} />
			))}
			<Pagination
				count={pageQuantity}
				onChange={(_, page) => handleChange(page)}
			/>
		</div>
	);
}

export default App;
