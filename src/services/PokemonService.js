import axios from "axios";
import { API_URL } from "../CONSTANTS";

export const PokemonService = {
	async getPokemons(offset = false) {
		const url = offset
			? `${API_URL}pokemon?offset=${offset}`
			: `${API_URL}pokemon`;

		const req = await axios.get(url);

		return req.data;
	},
};
