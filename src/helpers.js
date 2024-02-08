export const getPageQuantity = (pokemonQuantity = 0) => {
	return Math.ceil(pokemonQuantity / 20);
};

