import { View, Text } from 'react-native'
import React from 'react'

interface Pokemon {
	id: number;
	name: string;
	type: string;
	order: number;
	imagen: string;
}

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
	const { name, type, order, imagen } = pokemon;

	return (
		<View>
			<Text>PokemonCard info</Text>
		</View>
	)
}