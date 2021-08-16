const FILTER_OUT_INGREDIENT = 'FILTER_OUT_INGREDIENT'
const FILTER_IN_INGREDIENT = 'FILTER_IN_INGREDIENT'

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

export default function (state = [], action) {
	switch (action.type) {
		case FILTER_IN_INGREDIENT:
			let newState = [...state, action.ingredient]
			return newState
		case FILTER_OUT_INGREDIENT:
			newState = [...state]
			return newState.filter(
				(ingredient) => !(ingredient === action.ingredient)
			)
		default:
			return state
	}
}
