const FILTER_OUT_INGREDIENT = 'FILTER_OUT_INGREDIENT'
const FILTER_IN_INGREDIENT = 'FILTER_IN_INGREDIENT'
import { GET_ALL_INGREDIENTS } from './totalIngredients'

export const filterOutIngredient = (ingredient) => {
	return {
		type: FILTER_OUT_INGREDIENT,
		ingredient,
	}
}

export const filterInIngredient = (ingredient) => {
	return {
		type: FILTER_IN_INGREDIENT,
		ingredient,
	}
}

export const ingredientFiltering = (checkedStatus, ingredient) => {
	return function (dispatch) {
		if (checkedStatus) {
			dispatch(filterInIngredient(ingredient))
		} else {
			dispatch(filterOutIngredient(ingredient))
		}
	}
}

export default function (state = [], action) {
	switch (action.type) {
		case GET_ALL_INGREDIENTS:
			return action.ingredients
		case FILTER_IN_INGREDIENT:
			let newState = [...state, action.ingredient]
			return newState
		case FILTER_OUT_INGREDIENT:
			newState = [...state]
			newState = newState.filter(
				(ingredient) => !(ingredient === action.ingredient)
			)
			return newState
		default:
			return state
	}
}
