import { ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getPokemonDetailsApi } from '../api/Pokemon';
import Header from '../components/Pokemon/Header';

interface Props {
	route: any;
	navigation: any; // Puedes definir un tipo más específico si usas react-navigation
}


export default function Pokemon(props: Props): JSX.Element | null {
	const { route: { params }, navigation } = props;
	// console.log('params--->', params);


	interface Pokemon {
		name: string;
		order: number;
		sprites: {
			other: {
				"official-artwork": {
					front_default: string;
				};
			};
		};
		type: { type: { name: string } }[];
	}

	const [pokemon, setPokemon] = useState<Pokemon | null>(null);
	useEffect(() => {
		(async () => {
			try {
				const response = await getPokemonDetailsApi(params.id);
				// console.log('response--->', response);
				setPokemon(response);


			} catch (error) {
				navigation.goBack(); // Puedes redirigir a una pantalla de error
			}
		})();
	}, [params]);

	if (!pokemon) return null;

	return (
		<ScrollView>
			<Header name={pokemon.name} order={pokemon.order} image={pokemon.sprites.other["official-artwork"].front_default} type={pokemon.type[0].type.name} />
		</ScrollView>
	)
}