import { StyleSheet, View, Text, FlatList } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard';

interface Pokemon {
	id: number;
	name: string;
	type: string;
	order: number;
	imagen: string;
}


export default function PokemonList(props: { pokemons: Pokemon[] }) {
	const { pokemons } = props;
	// console.log('props--->', props);

	return (
		<FlatList
			data={pokemons}
			numColumns={2}
			showsVerticalScrollIndicator={false}
			keyExtractor={(pokemons) => String(pokemons.id)}
			renderItem={({ item }) => <PokemonCard pokemon={item} />}
			contentContainerStyle={styles.flatListContainer}
		/>
	)
}

const styles = StyleSheet.create({
	flatListContainer: {
		paddingHorizontal: 5,
	}
})