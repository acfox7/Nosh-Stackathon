import axios from 'axios'

const GET_RECIPE_DETAILS = 'GET_RECIPE_DETAILS'

export const haveRecipeDetails = (recipeInfo) => {
	return {
		type: GET_RECIPE_DETAILS,
		recipeInfo,
	}
}

//create thunk for getting data from API

export default function (state = [], action) {
	switch (action.type) {
		case GET_RECIPE_DETAILS:
			return action.recipeInfo
		default:
			return state
	}
}
