import { POKEMON_TYPE_COLORS } from "./constants";


const getColorByPokemonType = (type: string): string => POKEMON_TYPE_COLORS[type.toLowerCase() as keyof typeof POKEMON_TYPE_COLORS];
// const getColorByPokemonType = (type: PokemonType): string => POKEMON_TYPE_COLORS[type.toLocaleLowerCase()];
export default getColorByPokemonType;
