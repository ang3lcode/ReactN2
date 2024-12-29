import { SafeAreaView, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonsAPI, getPokemonDetailsByUrlApi } from "../api/Pokemon";
import PokemonList from "../components/PokemonList";

export default function Pokedex(): JSX.Element {
	interface Pokemon {
		id: number;
		name: string;
		type: string;
		order: number;
		imagen: string;
	}


	const [pokemons, setPokemons] = useState<Pokemon[]>([]); // Reemplaza "Pokemon" con el tipo adecuado
	// console.log("pokemons--->", pokemons);
	const [nextUrl, setNextUrl] = useState<string | null>(null);

	interface PokemonBasic {
		name: string;
		url: string;
	}

	interface PokemonDetails {
		id: number;
		name: string;
		types: { type: { name: string } }[];
		order: number;
		sprites: {
			other: {
				"official-artwork": {
					front_default: string;
				};
			};
		};
	}

	useEffect(() => {
		(async () => {
			await loadPokemons();
		})()
	}, [])

	const loadPokemons = async (): Promise<void> => {
		try {
			const response = await getPokemonsAPI(nextUrl || '');
			setNextUrl(response.next);


			const pokemonsArray = await Promise.all(
				response.results.map(async (pokemon: PokemonBasic) => {
					const pokemonDetails: PokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
					return {
						id: pokemonDetails.id,
						name: pokemonDetails.name,
						type: pokemonDetails.types[0].type.name,
						order: pokemonDetails.order,
						imagen:
							pokemonDetails.sprites.other["official-artwork"].front_default,
					};
				})
			);
			setPokemons([...pokemons, ...pokemonsArray])
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<SafeAreaView>
			<PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={!!nextUrl} />
		</SafeAreaView>
	);
}
