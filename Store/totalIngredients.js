import axios from 'axios'
import firebase from 'firebase'

export const GET_ALL_INGREDIENTS = 'GET_ALL_INGREDIENTS'
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT'

export const haveAllIngredients = (ingredients) => {
	return {
		type: GET_ALL_INGREDIENTS,
		ingredients,
	}
}

export const addIngredient = (ingredient) => {
	return {
		type: ADD_INGREDIENT,
		ingredient,
	}
}

export const deleteIngredient = (ingredient) => {
	return {
		type: REMOVE_INGREDIENT,
		ingredient,
	}
}

//create thunk for getting data from firebase
export const getAllIngredients = (userId) => {
	return async function (dispatch) {
		try {
			let database = firebase.database()
			const ingredientRef = database.ref('ingredients/' + userId)
			const res = ingredientRef.once('value', (snapshot) => {
				let data = snapshot.val() ? snapshot.val() : []
				//console.log('Data: ', data)
				let ingredients = []
				for (const prop in data) {
					if (data.hasOwnProperty(prop)) {
						let item = Object.keys(data[prop])[0]
						ingredients.push(item)
					}
				}
				dispatch(haveAllIngredients(ingredients))
			})
		} catch (error) {
			console.log('error getting ingredients from DB: ', error)
		}
	}
}

export const addIngredientToDB = (ingredient, userId) => {
	return async function (dispatch) {
		try {
			let database = firebase.database()
			const ingredientRef = database.ref('ingredients/' + userId)
			let newIngredient = {}
			newIngredient[ingredient] = true
			const res = await ingredientRef.push(newIngredient)
			dispatch(addIngredient(ingredient))
		} catch (error) {
			console.log('error adding ingredient to DB: ', error)
		}
	}
}

export const deleteIngredientFromDB = (ingredient, userId) => {
	return async function (dispatch) {
		let ingredientID
		let database = firebase.database()
		try {
			const ingredientListRef = database.ref('ingredients/' + userId)
			ingredientListRef.once('value', function (snapshot) {
				let data = snapshot.val()
				for (const prop in data) {
					if (data.hasOwnProperty(prop)) {
						let item = Object.keys(data[prop])[0]
						if (item === ingredient) {
							ingredientID = prop
						}
					}
				}
				const ingredientRef = database.ref(
					'ingredients/' + userId + '/' + ingredientID
				)
				ingredientRef.remove()
				dispatch(deleteIngredient(ingredient))
			})
		} catch (error) {
			console.log('Error deleting ingredient: ', error)
		}
	}
}

export default function (state = [], action) {
	switch (action.type) {
		case GET_ALL_INGREDIENTS:
			return action.ingredients
		case ADD_INGREDIENT:
			let newState = [...state, action.ingredient]
			return newState
		case REMOVE_INGREDIENT:
			newState = [...state]
			newState = newState.filter((item) => !(item === action.ingredient))
			return newState
		default:
			return state
	}
}
