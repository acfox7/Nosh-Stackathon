import 'react-native-gesture-handler'
import firebase from 'firebase'
import React from 'react'
import { connect } from 'react-redux'
import { View, ScrollView, StyleSheet } from 'react-native'
import { List, Button, Title, Text, Divider } from 'react-native-paper'
import SingleRecipeCard from './SingleRecipeCard'

import { recipesByIngredients } from './recipeDummyData'

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
			recipes: recipesByIngredients,
		}
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={{ margin: 25 }}>
					<Title style={styles.title}>Recipe Results</Title>
				</View>
				<Divider />
				<ScrollView>
					{this.state.recipes.map((recipe) => (
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
	}
}

export default connect(mapState, null)(RecipeSearchList)
