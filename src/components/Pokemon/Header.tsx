import { StyleSheet, View, SafeAreaView, Text, Image } from 'react-native';
import React from 'react';
import { capitalize, head } from 'lodash';
import getColorByPokemonType from '../../utils/gerColorByPokemonType';

interface HeaderProps {
	name: string;
	order: number;
	image: string;
	type: string;
}

export default function Header(props: HeaderProps): JSX.Element {
	const { name, order, image, type } = props;
	const color = getColorByPokemonType(type);

	const bgStyle = [{ backgroundColor: color, ...styles.bg }];
	return (
		<>
			<View style={bgStyle} />
			<SafeAreaView style={styles.content}>
				<View style={styles.header}>
					<Text style={styles.name}>{capitalize(name)}</Text>
					<Text style={styles.order}>#{`${order}.padStart(3, 0)`}</Text>
				</View>
				<View style={styles.contentImg}>
					<Image source={{ uri: image }} style={styles.image} />
				</View>
			</SafeAreaView>
		</>
	)
}

const styles = StyleSheet.create({
	bg: {
		width: '100%',
		height: 400,
		position: 'absolute',
		borderBottomLeftRadius: 300,
		borderBottomRightRadius: 300,
		transform: [{ scaleX: 2 }],
	},
	content: {
		marginHorizontal: 20,
		marginTop: 30,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 40,
	},
	name: {
		fontSize: 30,
		fontWeight: 'bold',
		color: 'white',
	},
	order: {
		fontSize: 20,
		color: 'white',
	},
	image: {
		width: 250,
		height: 300,
		resizeMode: 'contain',
	},
	contentImg: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		top: 30,
	},
});