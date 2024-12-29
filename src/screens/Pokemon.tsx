import { View, Text } from 'react-native'
import React from 'react'



interface Props {
	route: any;
	navigation: any; // Puedes definir un tipo más específico si usas react-navigation
}


export default function Pokemon(props: Props) {
	const { route, navigation } = props;
	console.log('props--->', route);
	console.log('navigation--->', navigation);


	return (
		<View>
			<Text>Estamos en un pokemon</Text>
		</View>
	)
}