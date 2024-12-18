import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import PokedexScreen from '../screens/Pokedex';

type RootStackParamList = {
	Favorite: undefined;
	Pokedex: undefined;
	Account: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function PokedexNavigation() {
	return (
		<Stack.Navigator screenOptions={{
			headerTitleAlign: "center", // Centra el título en todas las pantallas
		}}>
			<Stack.Screen name="Pokedex" component={PokedexScreen} options={{ title: "Pokedex" }} />
		</Stack.Navigator>
	)
}