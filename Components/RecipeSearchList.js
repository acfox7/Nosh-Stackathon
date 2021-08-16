import 'react-native-gesture-handler'
import firebase from 'firebase'
import React from 'react'
import { connect } from 'react-redux'
import { View, ScrollView, StyleSheet } from 'react-native'
import {
	List,
	Button,
	Title,
	Text,
	Divider,
	ActivityIndicator,
} from 'react-native-paper'
import SingleRecipeCard from './SingleRecipeCard'
import { fetchRecipesFromAPI } from '../Store/recipes'

import { recipesByIngredients } from './recipeDummyData'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FAFFEB',
	},
	loadingContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FAFFEB',
	},
	title: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 30,
	},
})

class RecipeSearchList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
		}
	}
	async componentDidMount() {
		const { getRecipes, filterIngredients } = this.props
		await getRecipes(filterIngredients)
		this.setState({
			loading: false,
		})
	}
	render() {
		const { recipes } = this.props

		if (this.state.loading) {
			return (
				<View style={styles.loadingContainer}>
					<ActivityIndicator animating={true} size='large' />
				</View>
			)
		}
		return (
			<View style={styles.container}>
				<View style={{ margin: 25 }}>
					<Title style={styles.title}>Recipe Results</Title>
				</View>
				<Divider />
				<ScrollView>
					{recipes.map((recipe) => (
						<React.Fragment key={recipe.id}>
							<SingleRecipeCard recipe={recipe} />
							<Divider />
						</React.Fragment>
					))}
				</ScrollView>
			</View>
		)
	}
}

const mapState = (state) => {
	return {
		recipes: state.recipes,
		filterIngredients: state.filterIngredients,
	}
}

const mapDispatch = (dispatch) => {
	return {
		getRecipes: (ingredients) => dispatch(fetchRecipesFromAPI(ingredients)),
	}
}

export default connect(mapState, mapDispatch)(RecipeSearchList)
