import { StyleSheet, View, Text, FlatList, SafeAreaView, ActivityIndicator, Platform } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard';

interface Pokemon {
	id: number;
	name: string;
	type: string;
	order: number;
	imagen: string;
}

export default function PokemonList(props: { pokemons: Pokemon[], loadPokemons: () => void, isNext: boolean }): JSX.Element {
	const { pokemons, loadPokemons, isNext } = props;
	// console.log('props1--->', props);

	// console.log(Platform.OS);


	const loadMore = () => {
		loadPokemons();
	};

	return (
		<View >
			<FlatList
				data={pokemons}
				numColumns={2}
				showsVerticalScrollIndicator={false}
				keyExtractor={(pokemons) => String(pokemons.id)}
				renderItem={({ item }) => <PokemonCard pokemon={item} />}
				contentContainerStyle={styles.flatListContentContainer}
				onEndReached={isNext ? loadMore : null}
				onEndReachedThreshold={0.1}
				ListFooterComponent={
					isNext ? (<ActivityIndicator size="large" style={styles.spinner} color="#AEAEAE" />) : null}
			/>

		</View>
	)
}

const styles = StyleSheet.create({
	flatListContentContainer: {
		paddingHorizontal: 5,
		marginTop: Platform.OS === 'android' ? 30 : 0,
	},

	spinner: {
		marginTop: 20,
		marginBottom: Platform.OS === 'android' ? 90 : 60,
	}
});