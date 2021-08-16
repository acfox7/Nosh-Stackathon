import axios from 'axios'

const GET_RECIPE_INSTRUCTIONS = 'GET_RECIPE_INSTRUCTIONS'

export const haveRecipeInstructions = (recipeInstructions) => {
	return {
		type: GET_RECIPE_INSTRUCTIONS,
		recipeInstructions,
	}
}

//create thunk for getting recipe data from API

export default function (state = [], action) {
	switch (action.type) {
		case GET_RECIPE_INSTRUCTIONS:
			return action.recipeInstructions
		default:
			return state
	}
}
