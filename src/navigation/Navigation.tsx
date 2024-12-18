import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5";
import Favorite from "../screens/Favorite";
import Account from "../screens/Account";
import Pokedex from "../screens/Pokedex";


type RootStackParamList = {
	Favorite: undefined;
	Pokedex: undefined;
	Account: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function Navigation() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Favorite" component={Favorite}
				options={{
					tabBarLabel: "favoritos", tabBarIcon: ({ color, size }) => (
						<Icon name="heart" size={size} color={color} />
					)
				}} />

			<Tab.Screen name="Pokedex" component={Pokedex}
				options={{
					tabBarLabel: "",
					tabBarIcon: () => renderPokeball()
				}} />

			<Tab.Screen name="Account" component={Account}
				options={{
					tabBarLabel: "Mi Cuenta",
					tabBarIcon: ({ color, size }) => (
						<Icon name="user" color={color} size={size} />
					)
				}} />
		</Tab.Navigator>
	);
}


function renderPokeball() {
	return (
		<Image
			source={require('../../assets/pokeball.png')}
			style={{ width: 75, height: 75, top: -20 }}
		/>
	)
} 