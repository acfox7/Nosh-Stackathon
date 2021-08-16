import 'react-native-gesture-handler'
import firebase from 'firebase'
import React from 'react'
import { connect } from 'react-redux'
import { View, Image, StyleSheet, ScrollView } from 'react-native'
import {
	Text,
	Divider,
	Title,
	Paragraph,
	Caption,
	Subheading,
	ActivityIndicator,
} from 'react-native-paper'
import RecipeInstructions from './RecipeInstructions'
import { fetchRecipeDetails } from '../Store/recipeDetails'
import { fetchRecipeInstructions } from '../Store/recipeInstructions'

//import { recipeInformation, recipeInstructions } from './recipeDummyData'

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: '#FAFFEB',
	},
	loadingContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
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

class SingleRecipePage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
		}
	}
	async componentDidMount() {
		await this.props.getRecipeDetails(this.props.route.params.id)
		await this.props.getRecipeInstructions(this.props.route.params.id)
		this.setState({
			loading: false,
		})
	}
	render() {
		if (this.state.loading) {
			return (
				<View style={styles.loadingContainer}>
					<ActivityIndicator animating={true} size='large' />
				</View>
			)
		}

		const recipeId = this.props.route.params.id
		const recipeDetails = this.props.recipeDetails
		//console.log('RECIPE DETAILS: ', recipeDetails.extendedIngredients)
		const recipeInstructions = this.props.recipeInstructions
		// const recipeInfo = recipeInformation.filter(
		// 	(info) => info.id === recipeId
		// )[0]
		const ingredientsList = recipeDetails.extendedIngredients.length
			? recipeDetails.extendedIngredients.map((ingredientObj) => {
					const name = ingredientObj.name
					const amount = ingredientObj.measures.us.amount
					const units = ingredientObj.measures.us.unitLong
					const totalInfo = amount + ' ' + units + ' ' + name
					return totalInfo
			  })
			: null

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
							{recipeDetails.title}
						</Text>
					</View>
					<View style={styles.generalInfoContainer}>
						{/* row with image and information */}
						<View>
							<Image
								style={styles.imageSize}
								source={{ uri: recipeDetails.image }}
							/>
						</View>
						<View style={styles.recipeInfoContainer}>
							{/* insert recipe information like title, servings, minutes, etc. */}
							<View style={styles.textline}>
								<Text style={styles.textWrap}>
									<Text style={{ fontWeight: '600' }}>Servings: </Text>
									{recipeDetails.servings}
								</Text>
							</View>
							<View style={styles.textline}>
								<Text style={styles.textWrap}>
									Ready in {recipeDetails.readyInMinutes} Minutes
								</Text>
							</View>
							<View style={styles.textline}>
								<Text style={styles.textWrap}>
									<Text style={{ fontWeight: '600' }}>Source:</Text>
									{recipeDetails.sourceUrl}
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
								{ingredientsList
									? ingredientsList.map((ingredient, index) => (
											<Text key={index} style={{ margin: 10 }}>
												{ingredient}
											</Text>
									  ))
									: null}
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
}

const mapState = (state) => {
	return {
		recipeDetails: state.recipeDetails,
		recipeInstructions: state.recipeInstructions,
	}
}

const mapDispatch = (dispatch) => {
	return {
		getRecipeDetails: (id) => dispatch(fetchRecipeDetails(id)),
		getRecipeInstructions: (id) => dispatch(fetchRecipeInstructions(id)),
	}
}

export default connect(mapState, mapDispatch)(SingleRecipePage)
