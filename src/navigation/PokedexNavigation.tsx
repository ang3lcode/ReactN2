import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import PokedexScreen from '../screens/Pokedex';
import PokemonScreen from '../screens/Pokemon';

type RootStackParamList = {
	Favorite: undefined;
	Pokedex: undefined;
	Account: undefined;
	Pokemon: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function PokedexNavigation() {
	return (
		<Stack.Navigator screenOptions={{
			headerTitleAlign: "center", // Centra el título en todas las pantallas
		}}>
			<Stack.Screen name="Pokedex" component={PokedexScreen} options={{ title: "", headerTransparent: true }} />
			<Stack.Screen name="Pokemon" component={PokemonScreen} options={{ title: "", headerTransparent: true }} />
		</Stack.Navigator>
	)
}