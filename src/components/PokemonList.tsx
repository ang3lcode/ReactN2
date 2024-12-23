import { StyleSheet, View, Text, FlatList, SafeAreaView } from 'react-native'
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
	console.log('props1--->', props);

	return (
		<SafeAreaView style={styles.saveArea}>
			<FlatList
				data={pokemons}
				numColumns={2}
				showsVerticalScrollIndicator={false}
				keyExtractor={(pokemons) => String(pokemons.id)}
				renderItem={({ item }) => <PokemonCard pokemon={item} />}
				contentContainerStyle={styles.flatListContentContainer}
			/>

		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	flatListContentContainer: {
		paddingHorizontal: 5,
		// top: 40,
	},
	saveArea: {
		marginTop: 40,
	}
});