import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5";
// import FavoriteScreen from "../screens/Favorite";
import FavoriteNavigation from "./FavoriteNavigation";
// import Account from "../screens/Account";
import AccountNavigation from "./AccountNavigation";
// import PokedexScreen from "../screens/Pokedex";
import PokedexNavigation from "./PokedexNavigation";


type RootStackParamList = {
	Favorite: undefined;
	Pokedex: undefined;
	Account: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function Navigation() {
	return (
		<Tab.Navigator screenOptions={{
			headerShown: false, // Desactiva el header globalmente
		}}>
			<Tab.Screen name="Favorite" component={FavoriteNavigation}
				options={{
					tabBarLabel: "favoritos", tabBarIcon: ({ color, size }) => (
						<Icon name="heart" size={size} color={color} />
					)
				}} />

			<Tab.Screen name="Pokedex" component={PokedexNavigation}
				options={{
					tabBarLabel: "",
					tabBarIcon: () => renderPokeball()
				}} />

			<Tab.Screen name="Account" component={AccountNavigation}
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