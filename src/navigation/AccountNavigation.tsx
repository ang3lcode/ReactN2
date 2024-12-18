import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Account from '../screens/Account';

type RootStackParamList = {
	Favorite: undefined;
	Pokedex: undefined;
	Account: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AccountNavigation() {
	return (
		<Stack.Navigator screenOptions={{
			headerTitleAlign: "center", // Centra el título en todas las pantallas
		}}>
			<Stack.Screen name="Account" component={Account} options={{ title: "Mi cuenta" }} />
		</Stack.Navigator>
	)
}