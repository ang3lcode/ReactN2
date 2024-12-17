import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

type RootStackParamList = {
	Home: undefined;
	Setting: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function Navigation() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="" component={ } />
		</Tab.Navigator>
	);
}
