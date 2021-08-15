import 'react-native-gesture-handler'
import firebase from 'firebase'
import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Divider, Title } from 'react-native-paper'
import { useNavigation } from '@react-navigation/core'

import { recipeInforamtion } from './recipeDummyData'

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		margin: 20,
	},
	imageSize: {
		width: 100,
		height: 100,
		marginRight: 10,
	},
	recipeInfoContainer: {
		justifyContent: 'space-around',
		flexShrink: 1,
	},
	textLine: {
		flexDirection: 'row',
		flexShrink: 1,
		margin: 5,
	},
	textWrap: {
		flexShrink: 1,
	},
})

export default function SingleRecipeCard(props) {
	const { recipe } = props
	const id = recipe.id
	const navigation = useNavigation()
	const ingredientsUsed = recipe.usedIngredients
		.map((ingredient) => ingredient.name)
		.join(', ')
	const missingIngredients = recipe.missedIngredients
		.map((ingredient) => ingredient.name)
		.join(', ')
	return (
		<View style={styles.container}>
			<View>
				<TouchableOpacity
					onPress={() => navigation.navigate('SingleRecipePage', { id: id })}
				>
					<Image style={styles.imageSize} source={{ uri: recipe.image }} />
				</TouchableOpacity>
			</View>
			<View style={styles.recipeInfoContainer}>
				<View style={styles.textLine}>
					<TouchableOpacity
						onPress={() =>
							navigation.navigate('SingleRecipePage', { id: recipe.id })
						}
					>
						<Text
							style={{
								flexWrap: 'wrap',
								fontWeight: 'bold',
								fontSize: 16,
								textDecorationLine: 'underline',
							}}
						>
							{recipe.title}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.textLine}>
					<Text style={styles.textWrap}>
						<Text style={{ fontWeight: '600' }}>Ingredients Utilized:</Text>{' '}
						{ingredientsUsed}
					</Text>
				</View>
				<View style={styles.textLine}>
					<Text style={styles.textWrap}>
						<Text style={{ fontWeight: '600' }}>Missing Ingredients:</Text>{' '}
						{missingIngredients}
					</Text>
				</View>
			</View>
		</View>
	)
}
