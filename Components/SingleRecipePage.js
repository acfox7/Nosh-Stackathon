import 'react-native-gesture-handler'
import firebase from 'firebase'
import React from 'react'
import { View, Image, StyleSheet, ScrollView } from 'react-native'
import {
	Text,
	Divider,
	Title,
	Paragraph,
	Caption,
	Subheading,
} from 'react-native-paper'
import RecipeInstructions from './RecipeInstructions'

import { recipeInformation, recipeInstructions } from './recipeDummyData'

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: '#FAFFEB',
	},
	generalInfoContainer: {
		flexDirection: 'row',
		margin: 20,
	},
	imageSize: {
		width: 150,
		height: 150,
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
	detailsContainer: {
		flexShrink: 1,
		margin: 10,
	},
})

export default function SingleRecipePage(props) {
	const recipeId = props.route.params.id
	const recipeInfo = recipeInformation.filter((info) => info.id === recipeId)[0]
	const ingredientsList = recipeInfo.extendedIngredients.map(
		(ingredientObj) => {
			const name = ingredientObj.name
			const amount = ingredientObj.measures.us.amount
			const units = ingredientObj.measures.us.unitLong
			const totalInfo = amount + ' ' + units + ' ' + name
			return totalInfo
		}
	)
	return (
		<View style={styles.mainContainer}>
			<View style={{ margin: 20, flex: 1 }}>
				<View>
					<Text
						style={{
							fontWeight: 'bold',
							fontSize: 25,
							textDecorationLine: 'underline',
							textAlign: 'center',
						}}
					>
						{recipeInfo.title}
					</Text>
				</View>
				<View style={styles.generalInfoContainer}>
					{/* row with image and information */}
					<View>
						<Image
							style={styles.imageSize}
							source={{ uri: recipeInfo.image }}
						/>
					</View>
					<View style={styles.recipeInfoContainer}>
						{/* insert recipe information like title, servings, minutes, etc. */}
						<View style={styles.textline}>
							<Text style={styles.textWrap}>
								<Text style={{ fontWeight: '600' }}>Servings: </Text>
								{recipeInfo.servings}
							</Text>
						</View>
						<View style={styles.textline}>
							<Text style={styles.textWrap}>
								Ready in {recipeInfo.readyInMinutes} Minutes
							</Text>
						</View>
						<View style={styles.textline}>
							<Text style={styles.textWrap}>
								<Text style={{ fontWeight: '600' }}>Source:</Text>
								{recipeInfo.sourceURL}
							</Text>
						</View>
					</View>
				</View>
				<Divider />
				<ScrollView style={{ flex: 1 }}>
					{/* column area for the ingredients and the instructions */}
					<View style={styles.detailsContainer}>
						<View style={{ flexShrink: 1 }}>
							<Subheading style={{ fontWeight: 'bold' }}>
								Ingredients:
							</Subheading>
							{ingredientsList.map((ingredient, index) => (
								<Text key={index} style={{ margin: 10 }}>
									{ingredient}
								</Text>
							))}
						</View>
						<View style={{ flexShrink: 1 }}>
							<Subheading style={{ fontWeight: 'bold' }}>
								Preparation:
							</Subheading>
							{recipeInstructions.map((instructionSet, index) => (
								<RecipeInstructions
									key={index}
									instructionSet={instructionSet}
								/>
							))}
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	)
}
