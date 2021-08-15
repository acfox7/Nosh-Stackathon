import 'react-native-gesture-handler'
import firebase from 'firebase'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
	Text,
	Divider,
	Title,
	Paragraph,
	Subheading,
	Caption,
} from 'react-native-paper'

export default function RecipeInstructions(props) {
	const { instructionSet } = props
	return (
		<View>
			{instructionSet.name ? (
				<Caption style={{ fontSize: 14 }}>{instructionSet.name}</Caption>
			) : null}
			{instructionSet.steps.map((step) => {
				const number = step.number
				const info = step.step
				const fullStep = `${number}.  ${info}`
				return (
					<Text key={number} style={{ margin: 10 }}>
						{fullStep}
					</Text>
				)
			})}
		</View>
	)
}
