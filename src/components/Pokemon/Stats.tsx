import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { map, capitalize } from 'lodash'

interface Stat {
	base_stat: number;
	stat: {
		name: string;
	};
}

interface StatsProps {
	stats: Stat[];
}

export default function Stats({ stats }: StatsProps): JSX.Element {
	console.log(stats);


	const barStyles = (num: number) => {
		const color = num > 49 ? "#00ac17" : "#ff3e3e";
		return {
			backgroundColor: color,
			width: num,
		};
	};

	return (
		<View style={styles.content}>
			<Text style={styles.title} >base Stats</Text>
			{map(stats, (stat, index) => (
				<View key={index} style={styles.block}>
					<View style={styles.blockTitle}>
						<Text style={styles.statName}>{capitalize(stat.stat.name)}</Text>
					</View>
					<View style={styles.blockInfo}>
						<Text style={styles.number}>{stat.base_stat}</Text>
						<View style={styles.bgBar}>
							<View style={[styles.bar, barStyles(stat.base_stat)]} />
						</View>
					</View>
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
		// justifyContent: "space-between",
		paddingVertical: 5,
	},
	blockTitle: {
		width: "30%",
	},
	statName: {
		fontSize: 12,
		color: "#6b6b6b",
	},
	blockInfo: {
		width: "70%",
		flexDirection: "row",
		alignItems: "center",
	},
	number: {
		width: "12%",
		fontSize: 12,
	},
	bgBar: {
		backgroundColor: "#dedede",
		width: "88%",
		height: 5,
		borderRadius: 20,
		overflow: "hidden",
	},
	bar: {
		// backgroundColor: "red",
		// width: "40%",
		height: 5,
		borderRadius: 20,
	},
})