import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
			<Tab.Screen name="Favorite" component={Favorite} />
			<Tab.Screen name="Pokedex" component={Pokedex} />
			<Tab.Screen name="Account" component={Account} />
		</Tab.Navigator>
	);
}
