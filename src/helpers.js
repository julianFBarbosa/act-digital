import { SPRITE_URL } from "./CONSTANTS";

export const getPageQuantity = (pokemonQuantity = 0) => {
	return Math.ceil(pokemonQuantity / 20);
};

export const getSpriteUrl = (url) => {
	url = url.split("/");

	return `${SPRITE_URL}${url[url.length - 2]}.png`;
};
