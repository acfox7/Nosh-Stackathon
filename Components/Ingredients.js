import 'react-native-gesture-handler'
import firebase from 'firebase'
//import firebase from '../firebaseconfig'
import React from 'react'
import { connect } from 'react-redux'
import {
	View,
	ScrollView,
	SafeAreaView,
	FlatList,
	StyleSheet,
} from 'react-native'
import {
	Text,
	TextInput,
	List,
	Button,
	Checkbox,
	Title,
} from 'react-native-paper'
import SingleListItem from './singleListItem'
import {
	getAllIngredients,
	addIngredientToDB,
	deleteIngredientFromDB,
} from '../Store/totalIngredients'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FAFFEB',
		alignItems: 'center',
		//marginTop: 70,
	},
	listTitle: {
		//color: '#22341D',
		fontWeight: 'bold',
		fontSize: 20,
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
	},
})

class Ingredients extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			textInput: '',
			ingredients: [],
		}
		this.handleDelete = this.handleDelete.bind(this)
	}
	componentDidMount() {
		const userId = this.props.user.uid
		this.props.getAllIngredients(userId)
	}
	handleChange(text) {
		this.setState({
			textInput: text,
		})
	}
	handleSubmit() {
		// console.log('evt input: ', evt)
		const userId = this.props.user.uid
		const newIngredient = this.state.textInput
		this.props.addIngredientToDB(newIngredient, userId)
		let currentIngredients = [...this.state.ingredients]
		currentIngredients.push(this.state.textInput)
		this.setState({
			ingredients: currentIngredients,
			textInput: '',
		})
	}
	handleDelete(name) {
		const userId = this.props.user.uid
		this.props.deleteIngredientFromDB(name, userId)

		// let currentIngredients = [...this.state.ingredients]
		// let newIngredients = currentIngredients.filter((item) => !(name === item))
		// this.setState({
		// 	ingredients: newIngredients,
		// })
	}
	render() {
		const { textInput } = this.state
		const { totalIngredients, navigation } = this.props
		return (
			<View style={styles.container}>
				<View
					style={{
						width: '100%',
						alignItems: 'center',
						justifyContent: 'center',
						flex: 1,
					}}
				>
					<TextInput
						style={{
							width: '70%',
							margin: 20,
						}}
						value={textInput}
						enablesReturnKeyAutomatically
						placeholder="What's in your fridge?"
						onChangeText={(text) => this.handleChange(text)}
						onSubmitEditing={() => this.handleSubmit()}
					/>
				</View>
				<View style={{ width: '90%', flex: 5, paddingBottom: 40 }}>
					<List.Subheader style={styles.listTitle}>
						My Ingredients:
					</List.Subheader>
					<ScrollView>
						<List.Section>
							{totalIngredients.map((item, index) => (
								<SingleListItem
									key={index}
									title={item}
									name={item}
									onDelete={this.handleDelete}
								/>
							))}
						</List.Section>
					</ScrollView>
				</View>
				<View style={{ flex: 1 }}>
					<Button
						mode='contained'
						onPress={() => navigation.navigate('RecipeList')}
					>
						What's cooking?
					</Button>
				</View>
			</View>
		)
	}
}

const mapState = (state) => {
	return {
		totalIngredients: state.totalIngredients,
		filterIngredients: state.filterIngredients,
		user: state.user,
	}
}

const mapDispatch = (dispatch) => {
	return {
		getAllIngredients: (userId) => dispatch(getAllIngredients(userId)),
		addIngredientToDB: (ingredient, userId) =>
			dispatch(addIngredientToDB(ingredient, userId)),
		deleteIngredientFromDB: (ingredient, userId) =>
			dispatch(deleteIngredientFromDB(ingredient, userId)),
	}
}

export default connect(mapState, mapDispatch)(Ingredients)
