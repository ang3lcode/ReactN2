import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { getPokemonDetailsApi } from "../api/Pokemon";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";

interface Props {
	route: any;
	navigation: any; // Puedes definir un tipo más específico si usas react-navigation
}

export default function Pokemon(props: Props): JSX.Element | null {


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
		types: { type: { name: string } }[];
	}

	const {
		navigation,
		route: { params },
	} = props;
	const [pokemon, setPokemon] = useState<Pokemon | null>(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await getPokemonDetailsApi(params.id);
				setPokemon(response);
			} catch (error) {
				navigation.goBack();
			}
		})();
	}, [params]);

	if (!pokemon) return null;

	return (
		<ScrollView>
			<Header
				name={pokemon.name}
				order={pokemon.order}
				image={pokemon.sprites.other["official-artwork"].front_default}
				type={pokemon.types[0].type.name}
			/>
			<Type types={pokemon.types} />
			<Stats stats={pokemon.stats} />
		</ScrollView>
	);
}