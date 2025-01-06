import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { map, capitalize } from 'lodash'

export default function Stats({ stats }): JSX.Element {
	return (
		<View style={styles.content}>
			<Text style={styles.title} >base Stats</Text>
			{map(stats, (stat, index) => (
				<View key={index} style={styles.block}>
					<View style={styles.blockTitle}>
						<Text style={styles.statName}>{capitalize(stat.stat.name)}</Text>

					</View>
					<Text>{stat.base_stat}</Text>
				</View>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	content: {
		marginHorizontal: 20,
		marginTop: 40,
		marginBottom: 80,
	},
	title: {
		fontWeight: "bold",
		fontSize: 20,
		paddingBottom: 5,
	},
	block: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 5,
	},
	blockTitle: {
		width: "30%",
	},
	statName: {
		fontSize: 12,
		color: "#6b6b6b",
	},
})