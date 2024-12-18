import { View, Text } from 'react-native'
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import FavoriteScreen from '../screens/Favorite';

type RootStackParamList = {
	Favorite: undefined;
	Pokedex: undefined;
	Account: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function FavoriteNavigation() {
	return (
		<Stack.Navigator screenOptions={{
			headerTitleAlign: "center", // Centra el título en todas las pantallas
		}}>
			<Stack.Screen name="Favorite" component={FavoriteScreen} options={{ title: "Favoritos" }} />
		</Stack.Navigator>
	)
}